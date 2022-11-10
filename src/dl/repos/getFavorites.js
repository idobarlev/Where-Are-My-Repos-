// Constants
import { repos } from "constants";

// Dl
import { fileReader } from "dl/general";

export const getFavorites = () => fileReader(repos);
