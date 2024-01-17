export interface CardType {
  id: number;
  favorite: boolean;
  created_at: string;
  url: string;

  title?: string;
  image_source?: string;
  description?: string;
}
