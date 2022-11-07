import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    "& *": {
      color: `${palette.text.default} !important`,
    },

    "& .MuiPaper-root": {
      textAlign: "center",
      borderRadius: 20,
      border: "1px solid #F9F9F9",
      backgroundColor: palette.background.primary,
      boxShadow: "0px 2px 9px rgba(79, 81, 255, 0.13)",
    },
  },
}));
