const { ipcRenderer } = window.require("electron");

export const dialog = (method, params) =>
  ipcRenderer.invoke("dialog", method, params);
