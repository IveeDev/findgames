import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../Data/platforms";
import APIClient from "../services/api-client";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    // staleTime: 24 * 60 * 60 * 1000, // 24hour
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;
