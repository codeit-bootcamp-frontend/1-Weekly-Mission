interface LinksData {
  data: Link[];
}
interface Link {
  id: number;
  created_at: string;
  updated_at: null;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: number;
}

interface FolderLink {
  id: number;
  created_at: string;
  url: string;
  title: string;
  image_source: string;
  description: string;
}
