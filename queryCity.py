#!/usr/bin/env python3
import os
import time
import json
import requests

API_KEY = "AIzaSyCQGyJsfj--hDGtbNXIn6r5hKeA2miNZas"  # Ensure billing-enabled key

# Load state codes from JSON file
with open("./src/map/states.json") as f:
    STATE_CODES = json.load(f)

def latest_file_for_city(city, folder):
    city_base = city.replace(" ", "_")
    return any(fname.startswith(city_base) and fname.endswith(".json") for fname in os.listdir(folder))

def fetch_and_save(city, state_code, folder):
    params = {
        "query": f"apartments in {city}, {state_code}",
        "key": API_KEY,
    }
    resp = requests.get("https://maps.googleapis.com/maps/api/place/textsearch/json", params=params)
    resp.raise_for_status()
    data = resp.json()
    timestamp = time.strftime("%Y%m%dT%H%M%S")
    filename = f"{folder}/{city.replace(' ', '_')}-{timestamp}.json"
    with open(filename, "w") as f:
        json.dump(data, f, indent=2)
    print(f"🗃 Saved {len(data.get('results', []))} results for '{city}, {state_code}' → {filename}")
    return data.get("next_page_token")

def process_state(state_code):
    city_file = f"./src/map/states/{state_code}.json"
    if not os.path.exists(city_file):
        print(f"⚠️  Missing city list for state: {state_code}")
        return

    with open(city_file) as f:
        cities = json.load(f)

    data_folder = f"places_data/{state_code}"
    os.makedirs(data_folder, exist_ok=True)

    for city in cities:
        if latest_file_for_city(city, data_folder):
            print(f"⏭ Skipping '{city}' — already exists")
            continue

        print(f"➡️  Fetching '{city}', {state_code}…")
        token = fetch_and_save(city, state_code, data_folder)

        while token:
            time.sleep(2)
            params = {"pagetoken": token, "key": API_KEY}
            resp = requests.get("https://maps.googleapis.com/maps/api/place/textsearch/json", params=params)
            resp.raise_for_status()
            data = resp.json()
            city_plain = city.replace(" ", "_")
            timestamp = time.strftime("%Y%m%dT%H%M%S")
            filename = f"{data_folder}/{city_plain}-{timestamp}-page.json"
            with open(filename, "w") as f:
                json.dump(data, f, indent=2)
            print(f"🗃 Saved page for '{city}' → {filename}")
            token = data.get("next_page_token")
            if token:
                time.sleep(2)

def run():
    for state_code in STATE_CODES:
        print(f"\n🔄 Processing state: {state_code}")
        process_state(state_code)

if __name__ == "__main__":
    run()
