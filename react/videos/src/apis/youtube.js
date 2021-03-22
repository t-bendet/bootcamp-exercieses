import axios from "axios";

const KEY = "AIzaSyCIsSiNX832hWYj6r4AKo_UHxsEOZl5KR0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
