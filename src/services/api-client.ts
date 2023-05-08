import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  // next: null;
  // previous: null;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0a073c7a46604d7aaf1175a1626d720b",
  },
});
