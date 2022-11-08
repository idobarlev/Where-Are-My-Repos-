// Constants
import { directories } from "constants";
import { fileReader } from "dl/general";

export const getDirectories = () => fileReader(directories);
