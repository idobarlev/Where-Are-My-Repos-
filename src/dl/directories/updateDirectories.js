import { directories as directoriesDB } from "constants";

const { writeFile } = window.require("fs");

export const updateDirectories = (directories) =>
  new Promise((resolve, reject) => {
    const data = JSON.stringify({ directories });

    writeFile(directoriesDB, data, (err) => {
      if (err) reject(err);
      resolve(data);
    });
  });
