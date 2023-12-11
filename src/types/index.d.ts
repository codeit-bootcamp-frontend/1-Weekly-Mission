// https://bootcamp-api.codeit.kr/api/users/1

// export interface UserDataProps {
//   data: UserData[];
// }

export interface UserData {
  id:           number;
  created_at:   string;
  name:         string;
  image_source: string;
  email:        string;
  auth_id:      string;
}

// https://bootcamp-api.codeit.kr/api/users/1/links


// export interface UserLinksDataProps {
//   links: UserLinksData[];
// }

export interface UserLinksData {
  id:           number;
  created_at:   string;
  updated_at:   null;
  url:          string;
  title:        null | string;
  description:  null | string;
  image_source: null | string;
  folder_id:    number | null;
}

// https://bootcamp-api.codeit.kr/api/users/1/folders

export interface UserFolderDataProps {
  data: UserFolderData[];
}

export interface UserFolderData {
  id:         number;
  created_at: string;
  name:       string;
  user_id:    number;
  link:       Link;
}

export interface Link {
  count: number;
}
