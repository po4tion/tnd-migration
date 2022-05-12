import { atom } from "recoil";

export const asisIpAddressState = atom<string | null>({
  key: "asisIpAddressState",
  default: null,
});
