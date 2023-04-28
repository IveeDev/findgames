import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d465f132657a490fbef8cbbc9e7bb871",
  },
});
