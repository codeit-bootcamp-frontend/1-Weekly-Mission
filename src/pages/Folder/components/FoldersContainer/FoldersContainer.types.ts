export interface Folder {
  id: number;
  name: string;
  created_at?: string;
  user_id?: number;
  link?: {
    count: number;
  };
}
