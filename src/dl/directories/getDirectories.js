// Constants
import { directories } from "constants";

const { readFile } = window.require("fs");

export const getDirectories = () =>
  new Promise((resolve, reject) => {
    readFile(directories, (err, data) => {
      if (err) reject(err);
      resolve(JSON.parse(data));
    });
  });
