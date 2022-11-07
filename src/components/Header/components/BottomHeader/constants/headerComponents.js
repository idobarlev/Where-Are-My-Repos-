// Constants
import { tabs } from "constants/general/tabs";

// Components
import { Repos } from "../components/Repos/Repos";
import { Directories } from "../components/Directories/Directories";

export const headerComponents = {
  [tabs.Repos]: Repos,
  [tabs.Directories]: Directories,
};
