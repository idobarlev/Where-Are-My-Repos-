const { existsSync } = window.require("fs");

export const getValidDirectory = async (dir) => {
  const openDir = dir.length < 2 ? "c:\\" : dir;

  const modifyDir = openDir.replaceAll("/", "\\");
  const dirFallback = modifyDir.split("\\");

  const dirs = dirFallback
    .reduce((acc, cur, index) => {
      const dir = acc[index - 1] ? `${acc[index - 1]}\\${cur}` : cur;
      return [...acc, dir];
    }, [])
    .reverse();

  const validDir = dirs.find((dir) => existsSync(dir));

  if (!validDir) {
    throw new Error(`Problem with route - ${openDir}`);
  }

  return validDir;
};
