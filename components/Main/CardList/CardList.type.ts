import { FolderData, URLS } from "@/utils/getData.type";

export interface CardListProps {
  id?: number;
  path: URLS.SHARED_FOLDER | URLS.FOLDER_LINKS;
}

export interface CardProps {
  folder?: FolderData[];
  url: string;
  imageSource?: string;
  image_source?: string;
  title: string;
  description: string;
  createdAt?: string;
  created_at?: string;
}
