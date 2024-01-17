import { PATHS } from "@/constants/path";

export interface CardListProps {
  id?: number;
  path: typeof PATHS.SHARED_FOLDER | typeof PATHS.FOLDER_LINKS;
}

export interface CardProps {
  url: string;
  image_source: string;
  title: string;
  description: string;
  created_at: string;
  id: number;
  favorite: boolean;
}
