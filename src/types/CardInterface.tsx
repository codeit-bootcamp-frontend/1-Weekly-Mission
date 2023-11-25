export default interface CardInterface {
  created_at: Date;
  description: string;
  folder_id?: string;
  id: string;
  image_source: string;
  title: string;
  updated_at?: Date;
  url: string;
}
