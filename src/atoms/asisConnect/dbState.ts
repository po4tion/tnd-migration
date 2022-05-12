import { atom } from "recoil";

export const asisDbState = atom<string | null>({
  key: "asisDbState",
  default: null,
});
