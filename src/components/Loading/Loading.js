// Css
import { Skeleton } from "@mui/material";
import { useStyles } from "./Loading.style";

export const Loading = ({ length = 8 }) => {
  const classes = useStyles();
  return [...new Array(length)].map((_, index) => (
    <Skeleton key={index} className={classes.item} variant="rectangular" />
  ));
};
