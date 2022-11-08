// Utilities
import {
  runBatOnRepos,
  openFileExplorer,
  getValidDirectory,
  getReposWithDirectories,
} from "utilities";

// Hooks
import { useDebounce } from "hooks";

// Constants
import { batDir, tabsSet } from "constants";

// Components
import { Loading, ProblemPopup } from "components";

// Dl
import { getFavorites, updateFavorites } from "dl/repos";
import { getDirectories, updateDirectories } from "dl/directories";

// React
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const Context = createContext({});
export const useAppProps = () => useContext(Context);

export const AppContext = ({ children }) => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [dirValue, setDirValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [tab, setTab] = useState([...tabsSet.values()][0]);
  const [directories, setDirectories] = useState(new Set());
  const [selectedRepos, setSelectedRepos] = useState(new Set());
  const [favoriteRepos, setFavoriteRepos] = useState(new Set());

  const debouncedSearchVal = useDebounce(search, 500);
  const directoriesArr = useMemo(() => [...directories], [directories]);

  useEffect(() => {
    const promises = [getDirectories(), getFavorites()];
    Promise.all(promises)
      .then(([{ directories }, { favorites }]) => {
        directories?.length && setDirectories(new Set(directories));

        if (!favorites?.length) {
          return;
        }
        setFavoriteRepos(new Set(favorites));
        setSelectedRepos(new Set(favorites));
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    !isLoading && updateFavorites([...favoriteRepos]);
  }, [favoriteRepos]);

  useEffect(() => {
    if (isLoading || !directoriesArr) {
      return;
    }

    updateDirectories(directoriesArr).catch((err) => console.error(err));

    getReposWithDirectories(directoriesArr)
      .then((res) => setRepos(res))
      .catch((err) => console.error(err));
  }, [directoriesArr]);

  const filteredRepos = useMemo(() => {
    if (debouncedSearchVal.length < 2) {
      return repos;
    }

    return repos.filter(({ repo }) => repo.includes(debouncedSearchVal));
  }, [repos, debouncedSearchVal]);

  const handleSelectRepo = (repoDirectory) => {
    setSelectedRepos((prev) => {
      prev.has(repoDirectory)
        ? prev.delete(repoDirectory)
        : prev.add(repoDirectory);
      return new Set(prev);
    });
  };

  const handleSelectFavorite = (repoDirectory) => {
    setFavoriteRepos((prev) => {
      prev.has(repoDirectory)
        ? prev.delete(repoDirectory)
        : prev.add(repoDirectory);

      return new Set(prev);
    });
  };

  const handleChangeTab = (_e, newValue) => {
    setTab(newValue);
  };

  const handleDeleteDirectory = (directory) => {
    setDirectories((prev) => {
      prev.delete(directory);
      return new Set(prev);
    });
  };

  const handleAddDirectory = async (directory) => {
    try {
      const validDirectory = await getValidDirectory(directory);

      return directory !== validDirectory
        ? openExplorer(validDirectory)
            .then(
              (selectedDir) =>
                selectedDir && handleUpdateDirectoriesState(selectedDir)
            )
            .catch((err) => {
              throw new Error(err);
            })
        : handleUpdateDirectoriesState(directory);
    } catch (err) {
      setError(err);
      console.error(err);
    }
  };

  const handleUpdateDirectoriesState = (directory) => {
    setDirectories((prev) => {
      prev.add(directory);
      return new Set(prev);
    });

    setDirValue("");
  };

  const handleChangeSearch = ({ target: { value } }) => {
    setSearch(value);
  };

  const handleOpenRepos = () => {
    runBatOnRepos(selectedRepos, batDir)
      .then(() => setSelectedRepos(new Set()))
      .catch((err) => console.error(err));
  };

  const handleClickFileExplorer = async (directory) => {
    try {
      const validDirectory = await getValidDirectory(directory);
      openExplorer(validDirectory)
        .then(
          (selectedDir) =>
            selectedDir && handleUpdateDirectoriesState(selectedDir)
        )
        .catch((err) => {
          setError(err);
          console.error(err);
        });
    } catch (err) {
      setError(err);
      console.error(err);
    }
  };

  const openExplorer = async (directory) => {
    try {
      return await openFileExplorer(directory);
    } catch (err) {
      setError(err);
      console.error(err);
    }
  };

  return (
    <Context.Provider
      value={{
        tab,
        search,
        dirValue,
        setDirValue,
        directories,
        selectedRepos,
        favoriteRepos,
        filteredRepos,
        directoriesArr,
        handleOpenRepos,
        handleChangeTab,
        handleSelectRepo,
        handleChangeSearch,
        handleAddDirectory,
        handleSelectFavorite,
        handleDeleteDirectory,
        handleClickFileExplorer,
      }}
    >
      {isLoading ? <Loading /> : children}
      <ProblemPopup error={error} handleClose={() => setError(null)} />
    </Context.Provider>
  );
};
