import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Screenshots from "./../entities/Screenshots";

const useScreenshots = (game_pk: string | number) => {
  const apiClient = new APIClient<Screenshots>(`/games/${game_pk}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", game_pk],
    queryFn: apiClient.getAll,
  });
};
export default useScreenshots;
