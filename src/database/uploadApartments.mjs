import fs from 'fs';
import path from 'path';
import { supabase } from './supabaseClient.js';

const BASE_PATH = './places_data';

function extractZip(address) {
  const match = address.match(/\b\d{5}(?:-\d{4})?\b/);
  return match ? match[0] : '00000';
}

async function processFile(state, file) {
  const city = file.split('-')[0].replace(/_/g, ' ');
  const fullPath = path.join(BASE_PATH, state, file);
  const content = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
  const entries = content.results || [];

  for (const entry of entries) {
    const name = entry.name;
    const address = entry.formatted_address || '';
    const place_id = entry.place_id || '';
    const zip_code = extractZip(address);

    const { error } = await supabase.from('apartments').upsert({
      state,
      zip_code,
      city,
      name,
      address,
      place_id,
      raw_json: entry
    }, { onConflict: 'place_id' });

    if (error) {
      console.error(`❌ Error uploading ${name} (${place_id}):`, error.message);
    } else {
      // console.log(`✅ Uploaded: ${name} → ${state}/${zip_code}`);
    }
  }
}

async function run() {
  const startFrom = 'MI';
  const states = fs.readdirSync(BASE_PATH).sort();
  let skip = true;

  for (const state of states) {
    if (skip) {
      if (state === startFrom) {
        skip = false;
      } else {
        continue;
      }
    }

    const files = fs.readdirSync(path.join(BASE_PATH, state)).filter(f => f.endsWith('.json'));
    for (const file of files) {
      await processFile(state, file);
    }
  }
}


run();
