import { fileWriter } from "dl/general";
import { directories as directoriesDB } from "constants";

export const updateDirectories = (directories) =>
  fileWriter(directoriesDB, { directories });
