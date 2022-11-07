import { Tab, Tabs } from "@mui/material";
import { useAppProps } from "AppContext";
import { tabsSet } from "constants/general";
import { useStyles } from "./TopHeader.style";

export const TopHeader = (props) => {
  const classes = useStyles();

  const { tab, handleChangeTab } = useAppProps();

  return (
    <Tabs value={tab} onChange={handleChangeTab} className={classes.container}>
      {[...tabsSet.values()].map((tab) => (
        <Tab key={tab} value={tab} label={tab} />
      ))}
    </Tabs>
  );
};
