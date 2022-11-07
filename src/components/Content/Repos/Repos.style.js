import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(({ palette }) => ({
  notFound: {
    fontSize: 19,
    marginTop: 50,
    fontWeight: 500,
    textAlign: "center",
    color: `${palette.text.headers} !important`,
  },
  sad: {
    fontSize: 40,
    margin: "auto",
    width: "fit-content",
    animation: "$sadAnimation 10s linear infinite",
  },

  "@keyframes sadAnimation": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
}));
