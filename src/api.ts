interface Link {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}
interface Sample {
  folder: {
    id: number;
    name: string;
    owner: {
      id: number;
      name: string;
      profileImageSource: string;
    };
    links: Link[];
  };
}

interface User {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

interface Folder {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  links: {
    count: number;
  };
}
interface Folders {
  data: Folder[];
}

interface LinksByFolder {
  data: {
    id: number;
    created_at: string;
    updated_at: string;
    url: string;
    title: string;
    description: string;
    image_source: string;
    folder_id: number;
  };
}

const API_URL = "https://bootcamp-api.codeit.kr";

const DEFAULT_USER_ID = 1;

export async function getData(response: Response) {
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
export async function getSample(category: string) {
  const response = await fetch(`${API_URL}/api/sample/${category}`);
  return getData(response) as unknown as Sample;
}

export async function getSampleUser(category: string) {
  const response = await fetch(`${API_URL}/api/sample/${category}`);
  return getData(response) as unknown as User;
}
export async function getUser(user_id = DEFAULT_USER_ID) {
  const response = await fetch(`${API_URL}/api/users/${user_id}`);
  return getData(response) as unknown as Folder;
}

export async function getFolders(user_id = DEFAULT_USER_ID) {
  const response = await fetch(`${API_URL}/api/users/${user_id}/folders`);
  return getData(response) as unknown as Folders;
}

export async function getLinksByFolderID(
  user_id = DEFAULT_USER_ID,
  folder_id = undefined
) {
  const queryParams = folder_id !== undefined ? `${folder_id}` : "";

  const response = await fetch(
    `${API_URL}/api/users/${user_id}/links?folderId=${queryParams}`
  );

  return getData(response) as unknown as LinksByFolder;
}

export default getSample;
