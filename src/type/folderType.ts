export type FolderData = {
  id: number;
  created_at: Date;
  name: string;
  user_id?: number;
  link: {
    count: number;
  };
};
