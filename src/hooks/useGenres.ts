import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../Data/genres";
import APIClient from "../services/api-client";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");
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
