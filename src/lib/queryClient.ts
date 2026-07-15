import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 1000, // data considered "fresh" for 30s before refetching
      retry: 1,
    },
  },
});