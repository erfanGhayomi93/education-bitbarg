import http from "@/core/http";

export async function getHomeDataDS() {
  return http.get(`/main/?mostSeenPostTake=8&newestPostTake=8&categoryPostsTake=8`);
}
