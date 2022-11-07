import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    "& .MuiPaper-root": {
      borderRadius: 20,
    },
  },
  repoCard: {
    marginLeft: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "calc(100% - 20px) !important",
    border: "1px solid #F9F9F9",
    boxShadow: "0px 2px 9px rgba(79, 81, 255, 0.13)",

    "&:hover, &:focus": {
      animation: "$hoverItem 0.2s cubic-bezier(0, 0, 0.5, -0.1) forwards",

      "& *": {
        color: `${palette.text.headers} !important`,
      },
      backgroundColor: `${palette.primary.main} !important`,
    },
    "& *": {
      color: `${palette.text.default} !important`,
    },

    backgroundColor: `${palette.background.secondary} !important`,
  },
  "@keyframes hoverItem": {
    "50%": {
      borderRadius: "20px",
    },
    "100%": {
      borderRadius: "10px",
      transform: "scale(1.01,1.02)",
    },
  },

  selected: {
    transform: "scale(1.01,1.02)",
    borderRadius: "10px !important",
    "& *": {
      color: `${palette.text.headers} !important`,
    },
    backgroundColor: `${palette.primary.main} !important`,
  },
  repo: {
    fontSize: 17,
    display: "flex",
    fontWeight: 500,
    alignItems: "center",
  },
  directory: {
    fontSize: 13,
  },
}));
