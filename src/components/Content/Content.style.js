import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(({ palette }) => ({
  content: {
    backgroundColor: palette.background.primary,
    padding: "120px 0px 50px 0px",

    "& *": {
      color: "#273446",
    },
    fontFamily: "Rubik",

    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: 5,
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: 3,
      backgroundColor: palette.scroller,
    },
  },
}));
