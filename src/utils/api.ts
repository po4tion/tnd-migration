import axios from "axios";
import { connectType, previewType } from "../types";

export const handleConenct = async (status: connectType) => {
  const result = await axios
    .post("/api/connect", {
      status,
    })
    .then((response) => response.data);

  return result;
};

export const handlePreview = async (status: previewType) => {
  const result = await axios
    .post("/api/preview", {
      status,
    })
    .then((response) => response.data);

  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleColumn = async (status: any) => {
  const result = await axios
    .post("/api/column", {
      status,
    })
    .then((response) => response.data);

  return result;
};
