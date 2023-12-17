import { UserInfo } from "@/types/api";
import { http } from "./axios";

export const getUser = () => http.get("users");
