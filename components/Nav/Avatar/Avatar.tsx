import Profile from "@/components/Nav/Avatar/Profile";
import axiosInstance from "@/lib/axios";
import { getCookie } from "@/utils/getCookie";
import { useQuery } from "@tanstack/react-query";

export default function Avatar() {
  return <Profile />;
}
