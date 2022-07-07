import { atom } from "recoil";
import { connectType } from "../../types";

export const asisConnectState = atom<boolean>({
  key: "asisConnectState",
  default: false,
});

export const asisDbState = atom<string | null>({
  key: "asisDbState",
  default: null,
});

export const asisDbTypeState = atom<string | null>({
  key: "asisDbTypeState",
  default: null,
});

export const asisIdState = atom<string | null>({
  key: "asisIdState",
  default: null,
});

export const asisIpAddressState = atom<string | null>({
  key: "asisIpAddressState",
  default: null,
});

export const asisPasswordState = atom<string | null>({
  key: "asisPasswordState",
  default: null,
});

export const asisPortState = atom<string | null>({
  key: "asisPortState",
  default: null,
});

export const asisDb = atom<connectType>({
  key: "asisDb",
  default: {
    dbType: null,
    ip: null,
    port: null,
    db: null,
    id: null,
    pw: null,
  },
});
