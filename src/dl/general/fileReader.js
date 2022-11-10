const path = window.require("path");
const { readFile } = window.require("fs");

const { initDir } = require("./initDir");

export const fileReader = (dir) =>
  new Promise((resolve, reject) => {
    const formattedPath = path.resolve(initDir, `../../${dir}`);

    readFile(formattedPath, (err, data) => {
      if (err) reject(err);

      try {
        const parsed = data.length ? JSON.parse(data) : "";
        resolve(parsed);
      } catch (err) {
        console.error(`Problem on parsing: ${formattedPath}`);
        reject(err);
      }
    });
  });
