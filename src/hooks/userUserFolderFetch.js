import useFetch from "./useFetch";

export default function useUserFolderFetch({ userId }) {
  const [data, isLoading] = useFetch(
    `https://bootcamp-api.codeit.kr/api/users/${userId}/folders`
  );
  return [data, isLoading];
}
