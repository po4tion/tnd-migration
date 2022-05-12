import { atom } from "recoil";

export const asisPasswordState = atom<string | null>({
  key: "asisPasswordState",
  default: null,
});
