const path = window.require("path");
const { writeFile } = window.require("fs");

const { initDir } = require("./initDir");

export const fileWriter = (dir, data) =>
  new Promise((resolve, reject) => {
    const formattedPath = path.resolve(initDir, `../../${dir}`);

    const json = JSON.stringify(data);

    writeFile(formattedPath, json, (err) => {
      if (err) reject(err);

      try {
        resolve(json);
      } catch (err) {
        console.error(`Problem on writing to: ${dir}`);
        reject(err);
      }
    });
  });
