//Css
import { Grid } from "@mui/material";
import { useAppProps } from "AppContext";
import { RepoCard } from "./components";
import { useStyles } from "./Repos.style";

export const Repos = () => {
  const {
    filteredRepos,
    selectedRepos,
    favoriteRepos,
    handleSelectRepo,
    handleSelectFavorite,
  } = useAppProps();
  const classes = useStyles();

  return filteredRepos?.length ? (
    <div>
      <Grid container spacing={2}>
        {filteredRepos.map(({ repo, directory }, index) => (
          <Grid key={directory} item xs={12}>
            <RepoCard
              repo={repo}
              index={index + 1}
              directory={directory}
              handleSelect={(event) => {
                event.stopPropagation();
                handleSelectRepo(directory);
              }}
              handleFavorite={(event) => {
                event.stopPropagation();
                handleSelectFavorite(directory);
              }}
              checked={selectedRepos.has(directory)}
              favorite={favoriteRepos.has(directory)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  ) : (
    <>
      <div className={classes.notFound}>No repos found</div>
      <div className={classes.sad}>☹️</div>
    </>
  );
};
