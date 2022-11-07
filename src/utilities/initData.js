import { getFavorites } from "dl/repos";
import { getDirectories } from "dl/directories";

export const initData = async () => {
  try {
    const { directories } = await getDirectories();
    // setDirectories(new Set(directories));

    // const { favorites } = await getFavorites();
    // const defaultFavorites = new Set(favorites);
    // setFavoriteRepos(defaultFavorites);
    // setSelectedRepos(defaultFavorites);
  } catch (err) {
    console.error(err);
  }
};
