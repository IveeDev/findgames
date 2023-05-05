import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../Data/genres";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");
export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>("/genres");
// const useGenres = () => ({ data: genre, isLoading: false, error: false }); // Static data
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    // staleTime: 24 * 60 * 60 * 1000, // 24 hour
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
