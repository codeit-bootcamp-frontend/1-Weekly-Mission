import useFetch from "./useFetch";
import React from "react";

export default function useUserFolderFetch({ id }) {
  const response = useFetch(
    `https://bootcamp-api.codeit.kr/api/users/${id}/folders`
  );
}
