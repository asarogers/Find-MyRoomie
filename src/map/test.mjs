import fs from 'fs';
import path from 'path';
import states from './states.json' assert { type: 'json' };

const done = ["AL", "CL"];
const outputLines = [];

states.forEach(state => {
  if (!done.includes(state)) {
    const formattedDone = done.map(data => `"${data}"`).join(', ');
    outputLines.push(`Give me all of the major cities for ${state} in this format: [${formattedDone}]`);

    const folderPath = './src/map/states';
    const filePath = path.join(folderPath, `${state}.json`);

    fs.mkdirSync(folderPath, { recursive: true }); // ensure directory exists
    fs.writeFileSync(filePath, '[]', 'utf-8'); // create empty JSON array as placeholder
  }
});

const outputFile = path.join('./', 'city_prompts.txt');
fs.writeFileSync(outputFile, outputLines.join('\n'), 'utf-8');
console.log(`✅ Wrote prompts to ${outputFile} and created empty files for each state.`);
