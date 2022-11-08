// Context
import { useAppProps } from "AppContext";

// Css
import { useStyles } from "./Repos.style";

// Mui
import { Search as SearchIcon } from "@mui/icons-material";
import { Button, InputAdornment, TextField } from "@mui/material";

export const Repos = () => {
  const classes = useStyles();

  const { search, handleOpenRepos, handleChangeSearch } = useAppProps();

  return (
    <div className={classes.container}>
      <TextField
        label="Where are my repos?"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
        className={classes.search}
        value={search}
        onChange={handleChangeSearch}
      />

      <div className={classes.open}>
        <Button variant="contained" onClick={handleOpenRepos}>
          open
        </Button>
      </div>
    </div>
  );
};
