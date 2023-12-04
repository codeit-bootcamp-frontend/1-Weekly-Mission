import axiosInstance from '@/lib/axios';

export interface LinkDataType {
  id: number;
  created_at: string;
  description: string;
  folder_id: number;
  image_source: string;
  title: string;
  updated_at: string | null;
  url: string;
}

export const getLinks = async () => {
  const res = await axiosInstance.get('/users/1/links');
  const links = res?.data;

  return links;
}

