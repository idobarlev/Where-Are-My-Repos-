// Css
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { useStyles } from "./ProblemPopup.style";

export const ProblemPopup = ({ error = null, handleClose }) => {
  const classes = useStyles();
  return (
    <Dialog onClose={handleClose} open={!!error} className={classes.root}>
      <DialogTitle>Got a problem</DialogTitle>
      <DialogContent>
        <DialogContentText>Check your params and try again</DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
