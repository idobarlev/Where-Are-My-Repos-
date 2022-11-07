// Css
import { useStyles } from "./Trash.style";

// Icons
import { RemoveCircleOutline } from "@mui/icons-material";

export const Trash = ({ color = "black" }) => {
  const classes = useStyles({ color });

  return <RemoveCircleOutline className={classes.root} />;
};
