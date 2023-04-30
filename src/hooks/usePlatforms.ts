import platform from "../Data/platform";
// import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
const usePlatforms = () => ({ data: platform, isLoading: false, error: false });

export default usePlatforms;
