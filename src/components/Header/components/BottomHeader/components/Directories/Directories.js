// Context
import { useAppProps } from "AppContext";

// Icons
import { Pageview } from "@mui/icons-material";

// Css
import { useStyles } from "./Directories.style";

// Mui
import { InputAdornment, TextField } from "@mui/material";

export const Directories = () => {
  const classes = useStyles();
  const { handleAddDirectory, handleClickFileExplorer, dirValue, setDirValue } =
    useAppProps();

  const handleChange = ({ target: { value } }) => {
    setDirValue(value);
  };

  return (
    <div className={classes.container}>
      <TextField
        value={dirValue}
        variant="standard"
        label="Add directory"
        onChange={handleChange}
        className={classes.textField}
        onKeyDown={({ key }) => {
          if (key !== "Enter") {
            return;
          }

          handleAddDirectory(dirValue);
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Pageview
                className={classes.pageview}
                onClick={() => {
                  handleClickFileExplorer(dirValue);
                }}
              />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};
