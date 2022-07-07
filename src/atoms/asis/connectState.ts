import { atom } from "recoil";
import { connectType } from "../../types";

export const asisConnectState = atom<boolean>({
  key: "asisConnectState",
  default: false,
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
