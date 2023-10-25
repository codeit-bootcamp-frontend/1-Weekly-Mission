import useAsync from "../hooks/useAsync";
import { fetchGet } from "./api";

const useFetchSampleFolder = () => {
  const [state, refetch] = useAsync(fetchGet("/api/sample/folder"), []);
  return state;
};

const useFetchUserProfile = () => {
  const [state, refetch] = useAsync(fetchGet("/api/sample/user"), []);
  return state;
};

export { useFetchSampleFolder, useFetchUserProfile };
