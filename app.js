#!/usr/bin/env node

import fs from "fs";

const taskManagerProjectStructure = {
    'src' : ['index.js']
}

Object.entries(taskManagerProjectStructure).forEach(([dir, files]) => {
    fs.mkdirSync(dir, { recursive: true }); // Create the directories
    files.forEach(file => fs.writeFileSync(`${dir}/${file}`, '')) // Create files
});

console.log("Project structure created successfully!");
