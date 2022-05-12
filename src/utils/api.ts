import axios from "axios";
import { asisConnectType } from "../types";

export const handleAsisConenct = async (status: asisConnectType) => {
  const result = await axios
    .post("/api/asisConnect", {
      status,
    })
    .then((response) => response.data);

  return result;
};
