import axios from "axios";

const inner = axios.create({
  baseURL: process.env.LOCAL_URL,
});

export default inner;
