interface FolderInterface {
  created_at?: Date;
  id: string;
  link?: { count: number };
  name: string;
  user_id?: number;
}

export default FolderInterface;
