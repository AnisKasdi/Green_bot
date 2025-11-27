const fs = require("fs"); // file system    
const path = require("path");// path

const readmepath = "./README.md" // path to the file

const readmeContent = fs.readFileSync(readmepath, "utf-8"); // read the file

const now = new Date(); // get the current date

const dateString = now.toLocaleString('fr-FR', { // FRENCH VERSION
    timeZone: 'Europe/Paris',
    dateStyle: 'full',
    timeStyle: 'medium'
});

const newContent = `Dernière mise à jour le : **${dateString}**`;
// 3. Remplacer le contenu entre les balises
const startMarker = '<!-- START_SECTION:date -->';
const endMarker = '<!-- END_SECTION:date -->';

const regex = new RegExp(`${startMarker}[\\s\\S]*?${endMarker}`); // regex to find the content between the markers
const replacement = `${startMarker}\n${newContent}\n${endMarker}`; // new content to replace the old content

const updatedReadme = readmeContent.replace(regex, replacement); // update the readme content

fs.writeFileSync(readmepath, updatedReadme, "utf-8"); // write the updated readme content

console.log('README mis à jour avec succès !');
