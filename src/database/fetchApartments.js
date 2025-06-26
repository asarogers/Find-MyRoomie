import { supabase } from './supabaseClient.js';

export default async function fetchApartments(state = 'IL') {
  const { data, error } = await supabase
    .from('apartments')
    .select('name, address, state, zip_code, place_id, raw_json')
    .eq('state', state); // Filter by state

  if (error) {
    console.error(`❌ Error fetching apartments for ${state}:`, error.message);
    return [];
  }

  // Transform the raw data into a cleaner format
  const apartments = data.map((apt) => {
    const { name, address, state, zip_code, place_id, raw_json } = apt;

    return {
      name,
      icon: raw_json?.icon || null,
      address,
      location: {
        lat: raw_json?.geometry?.location?.lat || null,
        lng: raw_json?.geometry?.location?.lng || null,
      },
      state,
      zip_code,
      place_id,
      rating: raw_json?.rating || null,
    };
  });

  return apartments;
}
