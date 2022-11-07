import { repos as reposDB } from "constants";

const { writeFile } = window.require("fs");

export const updateFavorites = (favorites) =>
  new Promise((resolve, reject) => {
    const data = JSON.stringify({ favorites });

    writeFile(reposDB, data, (err) => {
      if (err) reject(err);
      resolve(data);
    });
  });
