const childProcess = window.require("child_process");

export const runBatOnRepos = (selectedRepos, openDir) => {
  const promises = [...selectedRepos.values()].map((repo) => {
    try {
      return childProcess.exec(`${openDir} ${repo}`);
    } catch (err) {
      throw new Error(err);
    }
  });

  return Promise.all(promises);
};
