// Css
import { Grid } from "@mui/material";

// Context
import { useAppProps } from "AppContext";

// Components
import { DirectoryCard } from "./components";

// Css
import { useStyles } from "./Directories.style";

export const Directories = () => {
  const classes = useStyles();
  const { directoriesArr, handleDeleteDirectory } = useAppProps();
  return directoriesArr?.length ? (
    <div className={classes.directories}>
      <Grid container spacing={2}>
        {directoriesArr?.map((directory) => (
          <Grid key={directory} item xs={12}>
            <DirectoryCard
              name={directory}
              handleDeleteDirectory={handleDeleteDirectory}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  ) : (
    <>
      <div className={classes.notFound}>No directories found</div>
      <div className={classes.sad}>😒</div>
    </>
  );
};
