import { atom } from "recoil";

export const asisDbTypeState = atom<string | null>({
  key: "asisDbTypeState",
  default: null,
});
