import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(({ palette }) => ({
  container: {
    "& .MuiTab-textColorPrimary": {
      color: `${palette.text.headers}`,
    },
    display: "flex",
    height: 40,
    alignItems: "center",
    width: "calc(100% - 50px)",
    marginLeft: "25px !important",
  },
}));
