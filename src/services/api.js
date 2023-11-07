const URL = `https://bootcamp-api.codeit.kr/api/`;

export default async function getData(path) {
  const res = await fetch(URL + `${path}`);
  const body = await res.json();
  if (!res.ok) {
    throw new Error("DATA ERROR");
  }
  return body;
}

// export async function getFolderData() {
//   const res = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
//   const body = await res.json();
//   if (!res.ok) {
//     throw new Error("FOLDER DATA ERROR");
//   }
//   return body;
// }

// export async function getUserData() {
//   const res = await fetch("https://bootcamp-api.codeit.kr/api/sample/user");
//   const body = await res.json();
//   if (!res.ok) {
//     throw new Error("USER DATA ERROR");
//   }
//   return body;
// }

// export async function getUser1FolderData() {
//   const res = await fetch("https://bootcamp-api.codeit.kr/api/users/1/folders");
//   const body = await res.json();
//   if (!res.ok) {
//     throw new Error("USER1 FOLDER DATA ERROR");
//   }
//   return body;
// }
