const { app } = window.require("@electron/remote");
export const repos = `${app.getAppPath()}/src/db/repos.json`;
