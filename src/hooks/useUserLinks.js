import useFetch from "./useFetch";
import React from "react";

export default function useUserLinks({ userId, folderId }) {
  const [users, isLoading] = useFetch(
    `https://bootcamp-api.codeit.kr/api/users/${userId}/links${
      folderId ? `?folderId=${folderId}` : ""
    }`
  );

  return [users, isLoading];
}
