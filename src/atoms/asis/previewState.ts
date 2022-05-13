/* eslint-disable @typescript-eslint/no-explicit-any */
import { atom } from "recoil";

export const asisPreviewState = atom<any>({
  key: "asisPreviewState",
  default: null,
});

export const selectSchemaState = atom<string | null>({
  key: "selectSchemaState",
  default: null,
});

export const previewDataState = atom<any>({
  key: "previewDataState",
  default: null,
});