interface OnclickProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface Children {
  children?: React.ReactNode;
}

interface FolderProp {
  folder: {
    owner?: {
      id?: number;
      name?: string;
      profileImageSource: string;
    };
    name?: string;
  };
}

interface CardType {
  id: string;
  url?: string;
  description?: string;
  created_at?: string | undefined;
  createdAt?: string | undefined;
  image_source?: string | undefined;
  imageSource?: string;
}

interface CardListProps extends OnclickProps {
  card: CardType[];
  isCardEditable: boolean;
}

interface CardProps extends OnclickProps {
  card: CardType;
  isCardEditable: boolean;
}

interface Folder {
  id: string;
  name: string;
}

interface FolderListProps extends OnclickProps {
  folder: Folder[];
}

interface UserData {
  id?: number;
  email?: string;
  profileImageSource: string;
  image_source: string;
}

interface KebabButtonProps extends OnclickProps {
  url: string | undefined;
}

interface FoldersType {
  id: string;
  name: string;
  link: string;
}

interface ModalShareButtonProps {
  shareKakao?: () => void;
  shareFacebook?: () => void;
  shareLink?: () => void;
}

interface ModalProps extends OnclickProps, ModalShareButtonProps {
  title?: string;
  subTitle?: string;
  buttonContent?: string;
  folders: any[];
}

interface TitleProps extends Children {
  title?: string | undefined;
  folderName?: string;
}

interface SubTitleProps {
  subTitle: string | undefined;
}

interface ContentProps {
  content: string | undefined;
}

interface ShareBoxProps {
  onClick: () => void;
  src: string;
  alt: string;
  content: string;
}

interface ResultSearchProps {
  result: string;
}

interface SearchProps {
  value: string;
  searchResult: React.Dispatch<React.SetStateAction<string>>;
}
