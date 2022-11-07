// Constants
import { tabs } from "constants/general/tabs";

// Components
import { Repos } from "../Repos/Repos";
import { Directories } from "../Directories/Directories";

export const contentComponents = {
  [tabs.Repos]: Repos,
  [tabs.Directories]: Directories,
};
