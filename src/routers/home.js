import { Router } from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const router = Router();

//TODO: FILE FOR MANASMED OF THE ROUTING
async function loadRouter () {
  try {
    const directoryPath = path.dirname(fileURLToPath(import.meta.url)); //http://localhost:300/api/____
    const files = await fs.promises.readdir(directoryPath);

    //return in arreglo with the filter values
    const validFiles = files.filter(
      (file) =>
        path.extname(file) === ".js" &&
        file !== "home.js" &&
        file !== "tempCodeRunnerFile.js"
    );

    for (let file of validFiles) {
      const name = path.basename(file, ".js"); //similar to split() method in javascript

      try {
        const module = await import(`./${name}.js`);
        
        router.use(`/${name}`, module.default);
      } catch (err) {
        console.error(`Error importing module ${name}: ${err}`);
      }
    }
  } catch (err) {
    console.error(err);
  }
};

loadRouter();

export default router;