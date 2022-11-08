import { repos } from "constants";
import { fileReader } from "dl/general";

export const getFavorites = () => fileReader(repos);
