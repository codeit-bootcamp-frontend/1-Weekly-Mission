export type LinkRawData = {
  id: number;
  favorite: boolean;
  created_at: string;
  url: string;
  title: string;
  image_source: string;
  description: string;
};

export type Link = {
  id: number;
  title: string;
  url: string;
  imageSource: string;
  alt: string;
  description: string;
  elapsedTime: string;
  createdAt: string;
};
