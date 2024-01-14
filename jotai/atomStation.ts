import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const accessTokenAtom = atomWithStorage<string>("accessToken", "");
export const refreshTokenAtom = atomWithStorage<string>("refreshToken", "");
export const folderIdAtom = atom(0);
