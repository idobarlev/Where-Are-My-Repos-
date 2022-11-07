// Icons
import { Trash } from "icons";

// Css
import { useStyles } from "./DirectoryCard.style";

// Mui
import { Card, IconButton } from "@mui/material";
import { theme } from "constants";
import { memo } from "react";

export const DirectoryCard = memo(({ name, handleDeleteDirectory }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.directoryCard}>
        <div className={classes.directory}>
          <div>{name}</div>
        </div>
        <IconButton
          onClick={() => handleDeleteDirectory(name)}
          className={classes.delete}
        >
          <Trash color={theme.palette.delete} />
        </IconButton>
      </Card>
    </div>
  );
});
