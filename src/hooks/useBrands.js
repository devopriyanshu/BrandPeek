import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getAllBrands,
  getBrandById,
  followBrand,
} from "../services/brandService";

export function useBrands() {
  return useQuery({
    queryKey: ["brands"],
    queryFn: getAllBrands,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export function useBrand(brandId) {
  return useQuery({
    queryKey: ["brand", brandId],
    queryFn: () => getBrandById(brandId),
    enabled: !!brandId,
  });
}

export function useFollowBrand() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: followBrand,
    onSuccess: () => {
      queryClient.invalidateQueries(["brands"]);
    },
  });
}
