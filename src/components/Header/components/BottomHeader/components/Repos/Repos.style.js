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
  search: {
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

    margin: 0,
    padding: 0,
    width: "50%",
  },
  open: {
    marginTop: 10,
  },
}));
