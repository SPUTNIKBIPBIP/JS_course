const fs = require("fs").promises;

async function findFiles(folderName) {
    const items = await fs.readdir(folderName, { withFileTypes: true });
    items.forEach((item) => {
      if (item.isDirectory()) {
        // this is a folder, so call this method again and pass in
        // the path to the folder
        findFiles(`${folderName}/${item.name}`);
      } else {
        console.log(`Found file: ${item.name} in folder: ${folderName}`);
      }
    });
  }
  
  findFiles("stores");