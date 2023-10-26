import useFetch from "./useFetch";
import React from "react";

export default function useUserFetch({ id }) {
  const response = useFetch(`https://bootcamp-api.codeit.kr/api/users/${id}`);
  const [users, isLoading] = response;
  return [users.data, isLoading];
}
