import { fetchUserLinks } from "../api/users";
import useFetch from "./useFetch";

export default function useUserLinks({ userId, folderId }) {
  const [users, isLoading] = useFetch(
    `https://bootcamp-api.codeit.kr/api/users/${userId}/links${
      folderId ? `?folderId=${folderId}` : ""
    }`
  );

  return [users, isLoading];
}

// export function useUserTotalLinks({ userId, folderIdArr }) {
//   return folderIdArr.map((folderId) => {
//     return fetchUserLinks(
//       `https://bootcamp-api.codeit.kr/api/users/${userId}/links${
//         folderId ? `?folderId=${folderId}` : ""
//       }`
//     );
//   });
// }
