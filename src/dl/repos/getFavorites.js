import { repos } from "constants";

const { readFile } = window.require("fs");

export const getFavorites = () =>
  new Promise((resolve, reject) => {
    readFile(repos, (err, data) => {
      if (err) reject(err);
      resolve(JSON.parse(data));
    });
  });
