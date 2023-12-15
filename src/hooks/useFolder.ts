import useSWR from "swr";
import { useEffect, useState } from "react";
import { DOMAIN_URL } from "@/common/constants";

export function useFolder() {
  const [accessToken, setAccessToken] = useState<string | null>();

  // accessToken 없을때 401 에러나는 로직
  //   const fetcher = (url: string) =>
  //     fetch(`${DOMAIN_URL}${url}`, {
  //       headers: { Authorization: `Bearer ${accessToken}` },
  //     }).then((res) => res.json());

  const fetcher = (url: string) => {
    if (accessToken) {
      return fetch(`${DOMAIN_URL}${url}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      }).then((res) => res.json());
    }
  };

  const { data, isLoading, mutate } = useSWR("/api/folders", fetcher);

  useEffect(() => {
    if (localStorage.getItem("accessToken") !== null) {
      setAccessToken(localStorage.getItem("accessToken"));
      mutate();
    }
  }, [mutate, accessToken]);

  return {
    data,
    isLoading,
    mutate,
  };
}
