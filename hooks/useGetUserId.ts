import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";

export const useGetUserId = () => {
  const [id, setId] = useState<number>();
  const router = useRouter();

  useEffect(() => {
    (async function () {
      const accessToken = sessionStorage.getItem("accessToken");
      if (accessToken) {
        const res = await axios.get("/api/users", { headers: { Authorization: accessToken } });
        const { id } = res.data.data[0];
        setId(id);
        return;
      }
      router.push("/signin");
    })();
  }, []);

  return id;
};
