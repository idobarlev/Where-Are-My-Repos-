export const getRunArgs = () => {
  const rootDir = String(process.argv[1]).substring(
    0,
    String(process.argv[1]).lastIndexOf("\\")
  );

  const projectFolders = String(process.argv[2])
    .split(";")
    .filter((dir) => dir?.length);

  const openDir = `${rootDir}\\open.bat`;

  if (!projectFolders?.length || !openDir) {
    process.exit(1);
  }

  return { openDir, projectFolders };
};
