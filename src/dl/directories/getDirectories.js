// Dl
import { fileReader } from "dl/general";

// Constants
import { directories } from "constants";

export const getDirectories = () => fileReader(directories);
