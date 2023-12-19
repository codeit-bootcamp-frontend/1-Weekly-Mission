interface Link {
  id: number;
  image_source?: string;
  imageSource?: string;
  description: string;
  url: string;
  title: string;
  createdAt?: string;
  created_at?: string;
}

interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}

interface Items {
  id?: number;
  name: string;
  owner: Owner;
  links: Link[];
  count: string;
}

interface Folder {
  name: string;
  id: number;
  created_at: string;
  user_id: number;
  link: { count: number };
}

type Folders = Folder[];

interface SocialMediaLink {
  name?: string;
  url: string;
  icon: string;
}


//modal type
interface OptionButton {
  title: string;
  color: string;
}

interface Option {
  title: string;
  button: OptionButton;
  trigger?: string;
  input?: boolean;
}

interface PopOver {
  name: string;
  option: Option;
}