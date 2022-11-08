import { fileWriter } from "dl/general";
import { repos as reposDB } from "constants";

export const updateFavorites = (favorites) =>
  fileWriter(reposDB, { favorites });
