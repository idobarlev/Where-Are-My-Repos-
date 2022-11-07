import "./App.css";

// Css
import { useStyles } from "App.style";

// Hooks
import { useMediaQuery } from "hooks";

// Context
import { AppContext } from "AppContext";

// Components
import { Content, Header } from "components";

export const AppContainer = () => {
  const { height, width } = useMediaQuery();

  const classes = useStyles({ height, width });

  return (
    <div className={classes.app}>
      <Header />
      <Content />
    </div>
  );
};

export const App = (props) => {
  return (
    <AppContext>
      <AppContainer {...props} />
    </AppContext>
  );
};
