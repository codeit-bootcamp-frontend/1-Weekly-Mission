import useTest from "./useFetch";
import React from "react";

export default function useUserFetch({ userId }) {
  const [users, isLoading] = useTest(
    `https://bootcamp-api.codeit.kr/api/users/${userId}`
  );

  return [users, isLoading];
}
