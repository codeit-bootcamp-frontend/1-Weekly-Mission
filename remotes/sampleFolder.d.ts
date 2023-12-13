interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}

interface Link {
  id: number;
  folder_id: number;
  created_at: string;
  updated_at: null | string;
  url: string;
  title: string;
  description: string;
  image_source: string;
}

interface Folder {
  id: number;
  name: string;
  owner: Owner;
  links: Link[];
  count: number;
}

interface Temp {
  folder: Folder;
}
