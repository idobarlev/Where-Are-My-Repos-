// External libs
import clsx from "clsx";
import { memo } from "react";

// Icons
import { Star } from "icons";

// Css
import { useStyles } from "./RepoCard.style";

// Mui
import { Card, Checkbox, IconButton } from "@mui/material";

export const RepoCard = memo(
  ({
    repo,
    handleSelect,
    handleFavorite,
    checked = false,
    favorite = false,
  }) => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Card
          className={clsx(classes.repoCard, checked && classes.selected)}
          onClick={handleSelect}
        >
          <div className={classes.repo}>
            <Checkbox checked={checked} />
            <div>{repo}</div>
          </div>
          <IconButton className={classes.star} onClick={handleFavorite}>
            <Star selected={favorite} />
          </IconButton>
        </Card>
      </div>
    );
  }
);
