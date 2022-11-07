import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    top: 0,
    height: 120,
    zIndex: 1300,
    position: "fixed",
    overflow: "hidden",
    fontFamily: "Rubik",
    width: "100%",
    backgroundColor: palette.background.primary,
    boxShadow: "0px 2px 9px rgba(79, 81, 255, 0.13)",
  },
}));
