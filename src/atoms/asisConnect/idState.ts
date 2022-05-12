import { atom } from "recoil";

export const asisIdState = atom<string | null>({
  key: "asisIdState",
  default: null,
});
