export interface OwnerType {
  id: number;
  name: string;
  profileImageSource: string | null;
}

export interface SampleLinkType {
  id: number;
  createdAt: string;
  url: string;
  title: string | null;
  description: string | null;
  imageSource: string | null;
  image_source: undefined;
  created_at: undefined;
}

export interface SampleFolderDataType {
  id: number;
  name: string;
  owner: OwnerType;
  links: SampleLinkType[];
}

export interface SampleFolderType {
  folder: SampleFolderDataType;
}

export interface SampleUserType {
  id: number;
  name: string;
  email: string;
  profileImageSource: string | null;
  image_source: undefined;
}
