import { atom } from "recoil";

export const asisPortState = atom<string | null>({
  key: "asisPortState",
  default: null,
});
