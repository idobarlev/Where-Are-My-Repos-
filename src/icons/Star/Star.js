// Css
import { useStyles } from "./Star.style";

// Icons
import { Star as MuiStar } from "@mui/icons-material";

export const Star = ({ selected = false }) => {
  const classes = useStyles();

  return <MuiStar className={selected ? classes.selected : ""} />;
};
