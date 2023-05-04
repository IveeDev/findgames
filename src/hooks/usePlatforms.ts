// import { useQuery } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import platforms from "../Data/platforms";
import { FetchResponse } from "../services/api-client";
import apiClient from "../services/api-client";
// import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
// const usePlatforms = () => ({ data: platform, isLoading: false, error: false });
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24hour
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
