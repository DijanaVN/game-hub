import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9b3899f3dcf648b082634e2920a659ff",
  },
});
