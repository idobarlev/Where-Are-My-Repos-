import { createElement } from "react";

// Context
import { useAppProps } from "AppContext";

// Css
import { useStyles } from "./Content.style";

// Constants
import { contentComponents } from "./constants";

export const Content = () => {
  const classes = useStyles();
  const { tab } = useAppProps();
  return (
    <div className={classes.content}>
      {createElement(contentComponents[tab])}
    </div>
  );
};
