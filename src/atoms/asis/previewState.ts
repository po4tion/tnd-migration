/* eslint-disable @typescript-eslint/no-explicit-any */
import { atom } from "recoil";

export const previewLoading = atom<boolean>({
  key: "previewLoading",
  default: false,
});

export const previewList = atom<any>({
  key: "previewList",
  default: null,
});

export const selectSchema = atom<string | null>({
  key: "selectSchema",
  default: null,
});

export const selectTable = atom<string | null>({
  key: "selectTable",
  default: null,
});

export const selectPreview = atom<any>({
  key: "selectPreview",
  default: null,
});

export const asisColumn = atom<any>({
  key: "asisColumn",
  default: null,
});

export const countState = atom<number>({
  key: "countState",
  default: 0,
});

export const sliceState = atom<number>({
  key: "sliceState",
  default: 0,
});
