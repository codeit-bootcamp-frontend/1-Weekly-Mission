interface MapCardDataProps {
  id: number;
  createdAt?: string;
  created_at?: string;
  updated_at?: string;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
  image_source?: string;
  folder_id?: number;
}

interface MapCardDataReturn {
  image_source: string;
  created_at: string;
  description: string;
  url: string;
}

interface MapNavbarDataProps {
  id: number;
  created_at?: string;
  name: string;
  image_source?: string;
  profileImageSource?: string;
  email: string;
  auth_id?: string;
}

interface MapNavbarDataReturn {
  image_source: string;
  email: string;
}

const mapCardData = (items: MapCardDataProps): MapCardDataReturn => {
  const { description, url } = items;

  // User Data인지 Sample Data인지 확인
  if (items.folder_id !== undefined) {
    const { image_source, created_at } = items;
    return { image_source, created_at, description, url } as any;
  } else {
    const { imageSource: image_source, createdAt: created_at } = items;
    return { image_source, created_at, description, url } as any;
  }
};

const mapNavbarData = (items: MapNavbarDataProps): MapNavbarDataReturn => {
  const { email } = items;
  const image_source = items.profileImageSource
    ? items.profileImageSource
    : items.image_source;

  return { email, image_source } as any;
};

export { mapCardData, mapNavbarData };
