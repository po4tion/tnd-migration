/* eslint-disable @typescript-eslint/no-explicit-any */
import { atom } from "recoil";

export const previewLoadingState = atom<boolean>({
  key: "previewLoadingState",
  default: false,
});

export const asisPreviewState = atom<any>({
  key: "asisPreviewState",
  default: null,
});

export const selectSchemaState = atom<string | null>({
  key: "selectSchemaState",
  default: null,
});

export const selectTableState = atom<string | null>({
  key: "selectTableState",
  default: null,
});

export const previewDataState = atom<any>({
  key: "previewDataState",
  default: null,
});

export const asisColumnState = atom<any>({
  key: "asisColumnState",
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
