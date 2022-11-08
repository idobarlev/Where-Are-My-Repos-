const { writeFile } = window.require("fs");

export const fileWriter = (dir, data) =>
  new Promise((resolve, reject) => {
    const json = JSON.stringify(data);

    writeFile(dir, json, (err) => {
      if (err) reject(err);

      try {
        resolve(json);
      } catch (err) {
        console.error(`Problem on writing to: ${dir}`);
        reject(err);
      }
    });
  });
