import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(({ palette }) => ({
  container: {
    display: "flex",
    height: 80,
    alignItems: "center",
    width: "calc(100% - 50px)",
    marginLeft: "25px !important",
    justifyContent: "space-between",
  },
  textField: {
    "& .MuiInput-root, svg": {
      color: palette.text.headers,
    },

    "& label": {
      color: palette.text.headers,
    },

    "& .MuiInput-underline:after, .MuiInput-underline:before, .MuiInput-underline:hover:before":
      {
        borderBottomColor: palette.text.headers,
      },

    padding: 0,
    margin: 0,
    width: "100%",
  },
  add: {
    marginTop: 10,
  },
  pageview: {
    "&:hover, &:focus": {
      "& *": {
        color: `${palette.primary.main} !important`,
      },
    },
  },
}));
