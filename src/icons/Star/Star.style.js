import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(({ palette }) => ({
  selected: {
    fill: `${palette.star.selected} !important`,
  },
}));
