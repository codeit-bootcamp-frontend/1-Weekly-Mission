interface Count {
  count: number;
}

interface SingleFolder {
  created_at: string;
  id: number;
  link: Count;
  name: string;
  user_id: number;
}

interface Folders {
  data: SingleFolder[];
}

interface SingleFolderData {
  created_at: string;
  description: string;
  folder_id: number;
  id: number;
  image_source: string;
  title: string;
  updated_at: string;
  url: string;
}

interface TotalData {
  data: SingleFolderData[];
}

interface SingleFolderDataId {
  singleFolderDataId: number;
}
