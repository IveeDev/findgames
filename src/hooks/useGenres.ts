import { useQuery } from "@tanstack/react-query";
import genres from "../Data/genres";
import APIClient, { FetchResponse } from "../services/api-client";

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
    staleTime: 24 * 60 * 60 * 1000, // 24 hour
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
