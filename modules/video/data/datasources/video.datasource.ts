import http from "@/core/http";

export function VideoDatasource(enTitle : string) {
    return http.get(`/videos/${enTitle}`)
}