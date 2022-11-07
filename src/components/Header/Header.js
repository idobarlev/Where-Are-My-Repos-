// Css
import { useStyles } from "./Header.style";

// Mui
import { Divider } from "@mui/material";

import { TopHeader, BottomHeader } from "./components";

export const Header = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TopHeader />
      <Divider />
      <BottomHeader />
    </div>
  );
};
