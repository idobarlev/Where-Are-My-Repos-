import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    "& .MuiPaper-root": {
      borderRadius: 20,
    },
  },
  directoryCard: {
    marginLeft: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "calc(100% - 20px) !important",
    border: "1px solid #F9F9F9",
    boxShadow: "0px 2px 9px rgba(79, 81, 255, 0.13)",
    borderRadius: 1,

    "&:hover, &:focus": {
      borderRadius: "15px !important",
      "& *": {
        color: `${palette.text.headers} !important`,
      },
      backgroundColor: `${palette.primary.main} !important`,
      animation: "$hoverItem 0.2s cubic-bezier(0, 0, 0.5, -0.1) forwards",
    },
    "& *": {
      color: `${palette.text.default} !important`,
    },
    backgroundColor: `${palette.background.secondary} !important`,
  },
  directory: {
    fontSize: 17,
    marginLeft: 10,
    display: "flex",
    fontWeight: 500,
    alignItems: "center",
  },

  "@keyframes hoverItem": {
    "50%": {
      borderRadius: "20px",
    },
    "100%": {
      transform: "scale(1.01,1.02)",
      borderRadius: "10px !important",
    },
  },
}));
