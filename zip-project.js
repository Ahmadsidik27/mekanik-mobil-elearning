const AdmZip = require('adm-zip');
const fs = require('fs');
const path = require('path');

const OUTPUT_ZIP = 'mekanik-mobil-elearning.zip';

function addFolder(zip, folderPath, zipPath = '') {
  const items = fs.readdirSync(folderPath);
  items.forEach(item => {
    const fullPath = path.join(folderPath, item);
    const relPath = zipPath ? path.join(zipPath, item) : item;
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      addFolder(zip, fullPath, relPath);
    } else {
      zip.addFile(relPath.replace(/\\/g, '/'), fs.readFileSync(fullPath));
    }
  });
}

function main() {
  const zip = new AdmZip();

  // Include root files
  const rootFiles = ['package.json', 'README.md'];
  rootFiles.forEach(file => {
    if (fs.existsSync(file)) zip.addLocalFile(file);
  });

  // Include public and src folders
  ['public', 'src'].forEach(dir => {
    if (fs.existsSync(dir)) addFolder(zip, dir, dir);
  });

  zip.writeZip(OUTPUT_ZIP);
  console.log(`Project successfully zipped to ./${OUTPUT_ZIP}`);
}

main();
