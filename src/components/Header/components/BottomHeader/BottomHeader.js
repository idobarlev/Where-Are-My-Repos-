import { createElement } from "react";

// Context
import { useAppProps } from "AppContext";

// Constants
import { headerComponents } from "./constants";

export const BottomHeader = () => {
  const { tab } = useAppProps();
  return createElement(headerComponents[tab]);
};
