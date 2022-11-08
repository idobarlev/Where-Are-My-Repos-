const { readFile } = window.require("fs");

export const fileReader = (dir) =>
  new Promise((resolve, reject) => {
    readFile(dir, (err, data) => {
      if (err) reject(err);

      try {
        const parsed = data.length ? JSON.parse(data) : "";
        resolve(parsed);
      } catch (err) {
        console.error(`Problem on parsing: ${dir}`);
        reject(err);
      }
    });
  });
