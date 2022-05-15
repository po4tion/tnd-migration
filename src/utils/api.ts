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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleAsisColumn = async (status: any) => {
  const result = await axios
    .post("/api/asisColumn", {
      status,
    })
    .then((response) => response.data);

  return result;
};
