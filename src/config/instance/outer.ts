import axios from "axios";

const outer = axios.create({
  baseURL: process.env.SERVER_URL,
});

export default outer;
