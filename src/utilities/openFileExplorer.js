import { dialog } from "renderers";

export const openFileExplorer = async (path) => {
  const dialogConfig = {
    defaultPath: path,
    title: "Select a directory",
    properties: ["openDirectory"],
    buttonLabel: "This one will do",
  };
  const { filePaths, canceled } = await dialog("showOpenDialog", dialogConfig);

  if (canceled || !filePaths?.length) {
    return null;
  }

  return filePaths[0];
};
