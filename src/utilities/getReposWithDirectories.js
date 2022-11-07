import { getValidDirectories } from "./directories";

export const getReposWithDirectories = async (projectFolders) => {
  const repos = await projectFolders.reduce(async (acc, projectFolder) => {
    try {
      const repos = await getValidDirectories(projectFolder);

      const reposWithDirectories = repos.map((repo) => ({
        directory: `${projectFolder}\\${repo}`,
        repo,
      }));

      return [...(await acc), ...reposWithDirectories];
    } catch (err) {
      throw new Error(err);
    }
  }, []);

  if (!repos) {
    process.exit(1);
  }

  return repos;
};
