import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  root: ({ color }) => ({
    fill: `${color || "black"} !important`,
  }),
}));
