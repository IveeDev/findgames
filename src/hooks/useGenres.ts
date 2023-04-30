import genre from "../Data/genre";
// import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>("/genres");
const useGenres = () => ({ data: genre, isLoading: false, error: false }); // Static data

export default useGenres;
