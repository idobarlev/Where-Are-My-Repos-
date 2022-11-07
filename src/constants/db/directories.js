const { app } = window.require("@electron/remote");
export const directories = `${app.getAppPath()}/src/db/directories.json`;
