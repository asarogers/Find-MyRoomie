#!/usr/bin/env python3

import requests
import os
import json
from datetime import datetime
import time

def get_region_id(city: str, state: str) -> str:
    # 🎯 Replace this with accurate mappings as needed
    city_region_map = {
        "AL": {
            "Birmingham": "23517",
            "Montgomery": "23763",
            "Mobile": "23563",
            "Huntsville": "23553",
            "Tuscaloosa": "23761",
            "Hoover": "23491",
            "Dothan": "23497",
            "Auburn": "23472",
            "Decatur": "23495",
            "Madison": "23557",
            "Florence": "23501",
            "Gadsden": "23503",
            "Phenix City": "23587",
            "Prattville": "23591",
            "Enterprise": "23493",
            "Vestavia Hills": "23767",
            "Opelika": "23581",
            "Alabaster": "23465",
            "Bessemer": "23469",
            "Homewood": "23545"
        }
    }
    return city_region_map.get(state, {}).get(city, "26123")  # fallback

def fetch_redfin_rentals(city="chicago", region_id="26123", state="IL"):
    base_url = "https://www.redfin.com/stingray/api/v1/search/rentals"
    max_per_page = 350
    start = 0
    page_number = 1
    buffer = []
    chunk_number = 1
    created_files = []

    headers = {
        "User-Agent": "Mozilla/5.0",
        "Accept": "application/json, text/plain, */*",
        "Referer": "https://www.redfin.com/",
        "Origin": "https://www.redfin.com"
    }

    def save_chunk(chunk, chunk_num):
        folder_path = os.path.join("data", state, city)
        os.makedirs(folder_path, exist_ok=True)
        timestamp = datetime.now().strftime("%Y-%m-%dT%H%M%S")
        filename = f"listings-{chunk_num:03d}-{timestamp}.json"
        filepath = os.path.join(folder_path, filename)
        with open(filepath, "w") as f:
            json.dump(chunk, f, indent=2)
        print(f"💾 Saved {len(chunk)} listings to {filepath}")
        created_files.append(filepath)

    while True:
        params = {
            "al": "1",
            "isRentals": "true",
            "market": city,
            "num_homes": str(max_per_page),
            "ord": "redfin-recommended-asc",
            "page_number": str(page_number),
            "region_id": region_id,
            "region_type": "2",
            "sf": "1,2,3,5,6,7",
            "start": str(start),
            "status": "9",
            "uipt": "4",
            "use_max_pins": "true",
            "v": "8"
        }

        print(f"📡 Fetching page {page_number} for {city}, {state} (start={start})...")
        try:
            response = requests.get(base_url, headers=headers, params=params, timeout=10)
            response.raise_for_status()
            data = response.json()
        except Exception as e:
            print(f"❌ Error on page {page_number}: {e}")
            break

        listings = None
        for key_path in [
            data.get("payload", {}).get("searchResults", {}).get("mapSearchResults"),
            data.get("payload", {}).get("homes"),
            data.get("homes"),
            data.get("mapSearchResults")
        ]:
            if isinstance(key_path, list):
                listings = key_path
                break

        if not listings:
            print("⚠️ No listings found. Ending pagination.")
            break

        for listing in listings:
            buffer.append(listing)
            if len(buffer) == 10:
                save_chunk(buffer, chunk_number)
                buffer = []
                chunk_number += 1

        if len(listings) < max_per_page:
            print("🏁 Last page reached.")
            break

        page_number += 1
        start += max_per_page
        time.sleep(1)

    if buffer:
        save_chunk(buffer, chunk_number)

    # 🔄 Combine and clean up
    combined_data = []
    for file_path in created_files:
        with open(file_path, "r") as f:
            combined_data.extend(json.load(f))
        os.remove(file_path)
        print(f"🗑️ Deleted chunk: {file_path}")

    combined_name = f"{city.lower()}-{state.lower()}-rentals-{datetime.now().strftime('%Y-%m-%dT%H%M%S')}.json"
    combined_path = os.path.join("data", state, city, combined_name)

    os.makedirs(os.path.dirname(combined_path), exist_ok=True)

    with open(combined_path, "w") as f:
        json.dump(combined_data, f, indent=2)

    print(f"\n🎉 Combined {len(combined_data)} listings saved to {combined_path}")

if __name__ == "__main__":
    state = "AL"
    cities_file = f"./src/map/states/{state}.json"
    with open(cities_file) as f:
        cities = json.load(f)

    for city in cities:
        region_id = get_region_id(city, state)
        fetch_redfin_rentals(city=city, region_id=region_id, state=state)
