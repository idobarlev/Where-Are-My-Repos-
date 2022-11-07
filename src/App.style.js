import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(({ palette }) => ({
  app: ({ height }) => ({
    color: "#273446",
    fontFamily: "Rubik",
    height: height - 30,
    gridTemplateRows: "80px 300px",
    backgroundColor: `${palette.background.primary} !important`,
  }),
}));
