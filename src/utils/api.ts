import axios from "axios";
import { asisConnectType, asisPreviewType } from "../types";

export const handleAsisConenct = async (status: asisConnectType) => {
  const result = await axios
    .post("/api/asisConnect", {
      status,
    })
    .then((response) => response.data);

  return result;
};

export const handleAsisPreview = async (status: asisPreviewType) => {
  const result = await axios
    .post("/api/asisPreview", {
      status,
    })
    .then((response) => response.data);

  return result;
};
