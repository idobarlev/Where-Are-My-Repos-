const {
  existsSync,
  promises: { readdir },
} = window.require("fs");

// Search for repos
export const getValidDirectories = async (source) => {
  const all = await readdir(source, { withFileTypes: true });
  return all.reduce((acc, dirent) => {
    const folderToSearch = `${source}\\${dirent.name}\\.git`;
    const isRepo = existsSync(folderToSearch);

    const isValid = dirent.isDirectory() && isRepo;

    if (!isValid) {
      return acc;
    }

    return [...acc, dirent.name];
  }, []);
};
