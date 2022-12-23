import axios from "axios";

export default class Youtube {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: { key: import.meta.env.VITE_APP_YOUTUBE_API_KEY },
    });
  }
  async search(keyword) {
    return keyword ? this.searchVideoByKeyword(keyword) : this.mostPopular();
  }

  async searchVideoByKeyword(keyword) {
    return this.httpClient
      .get("/search", {
        params: {
          part: "snippet",
          maxResults: 20,
          type: "video",
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) =>
        items.map((item) => {
          return { ...item, id: item.id.videoId };
        })
      );
  }

  async mostPopular() {
    return this.httpClient
      .get("/videos", {
        params: {
          part: "snippet",
          maxResults: 20,
          chart: "mostPopular",
        },
      })
      .then((res) => res.data.items);
  }

  async relatedVideos(id) {
    return this.httpClient
      .get("/search", {
        params: {
          part: "snippet",
          maxResults: 20,
          type: "video",
          relatedToVideoId: id,
        },
      })
      .then((res) => res.data.items)
      .then((items) =>
        items.map((item) => {
          return { ...item, id: item.id.videoId };
        })
      );
  }

  async channelThumnail(id) {
    return this.httpClient
      .get("/channels", {
        params: {
          part: "snippet",
          id: id,
        },
      })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }
}
