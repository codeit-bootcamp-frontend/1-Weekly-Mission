import { PATHS } from "@/constants/path";

export interface CardListProps {
  id?: number;
  path: typeof PATHS.SHARED_FOLDER | typeof PATHS.FOLDER_LINKS;
}

export interface CardProps {
  url: string;
  imageSource?: string;
  image_source?: string;
  title: string;
  description: string;
  createdAt?: string;
  created_at?: string;
}
