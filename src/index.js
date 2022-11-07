import React from "react";
import ReactDOM from "react-dom/client";
import WebFont from "webfontloader";
import reportWebVitals from "./reportWebVitals";

// Components
import { App } from "./App";

// Theme
import MuiThemeProvider from "./MuiTheme";

WebFont.load({
  google: {
    families: ["Rubik:300,400,500,600,700"],
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MuiThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MuiThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
