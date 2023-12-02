import { StaticImageData } from "next/image";
import React, { ChangeEvent, FocusEvent, ReactNode } from "react";

export interface GlobalNavWrapperProps {
  $isFolder: boolean;
}

export interface UserInfoProps {
  email: string;
  profileImageSource: string;
  image_source: string;
}

export interface UseAsyncReturn<T> {
  execute: () => void;
  loading: boolean;
  error: Error | null;
  data: T | null;
}

export interface SampleUser {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

export interface SampleLink {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

export interface SampleFolder {
  folder: {
    id: number;
    name: string;
    owner: {
      id: number;
      name: string;
      profileImageSource: string;
    };
    link: {
      count: number;
    };
    links: SampleLink[];
    count: number;
  };
}

export interface Link {
  id: number;
  created_at: string;
  url: string;
  title: string;
  description: string;
  image_source: string;
}

export interface Links {
  data: Link[];
}

export interface Folder {
  id: number;
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  link: {
    count: number;
  };
  links: {
    id: number;
    createdAt: string;
    url: string;
    title: string;
    description: string;
    imageSource: string;
  }[];
}

export interface Folders {
  data: Folder[];
}

export interface MappedFolder {
  profileImage: string;
  ownerName: string;
  folderName: string;
  links: MappedLink[];
}

export interface MappedLink {
  id: number;
  url: string;
  title: string;
  imageSource: string;
  alt: string;
  elapsedTime: string;
  createdAt: string;
  description: string;
}

export interface CardListProps {
  links: MappedLink[];
  folders?: Folder[];
  isShared: boolean;
}

export interface CardProps {
  link: MappedLink;
  folders?: Folder[];
  isShared: boolean;
}

export interface SharedFolderProps {
  profileImage: string;
  ownerName: string;
  folderName: string;
}

export interface KebabMenusProps {
  linkUrl: string;
  isKebabOpen: boolean;
  folderId: number;
  folders?: Folder[];
  setIsKebabOpen: (isOpen: boolean) => void;
}

export interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

export interface KebabProps {
  iconTitle: string;
  modalId: string;
}

export interface KebabButtonListProps {
  $isOpen: boolean;
}

export interface FolderSearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}
export interface FolderTabBarProps {
  folders: Folder[];
  selectedFolderId: string;
}
export interface FolderAddBarProps {
  folders: Folder[];
  isSticky: boolean;
  isHidden: boolean;
}
export interface FolderToolbarProps {
  folderName: string;
}

export interface FolderManageMenusProps {
  iconTitle: string;
  imgSrc: StaticImageData;
  modalId: string;
}

export interface ShareLinksProps {
  iconSrc: StaticImageData;
  iconTitle: string;
}

export interface InputFieldProps {
  modalTarget: string;
}

export interface FolderLayoutProps {
  folderId: string;
}

export interface ModalLayoutProps {
  children: ReactNode;
  onClose: () => void;
}

export interface ModalSelectButtonProps {
  folderName: string;
  linkCount: number;
}

export interface FolderSelectButtonProps {
  $isSelect: boolean;
}

export interface ModalButtonProps {
  $isDelete: boolean;
}

export interface AddLinkBarProps {
  $isSticky: boolean;
  $isHidden: boolean;
}

export interface CloseIconProps {
  onClick: () => void;
}

export interface FeatureArticleProps {
  title: ReactNode;
  description: ReactNode;
  imageSrc: string;
  alt: string;
  idx: number;
}

export interface ArticleProps {
  $isOdd: boolean;
}
export interface ArticleTitleProps {
  $idx: number;
}

export type AuthInputType = "email" | "password";

export interface AuthInputProps {
  label: string;
  type?: string;
  name: string;
  inputValue: string;
  setInputValue: (e: ChangeEvent<HTMLInputElement>) => void;
  validateInput: (e: FocusEvent<HTMLInputElement>) => void;
  errorMsg: string;
  autoComplete: string;
}

export interface ValidateType {
  [key: string]: RegExp;
}
export interface ValidateErrorMsgType {
  [key: string]: {
    [key: string]: string;
  };
}

export interface InputValueType {
  [key: string]: string;
}

export interface ErrorMessageType {
  [key: string]: string;
}

export interface AuthInputStyle {
  $isValid?: boolean;
}

export interface getErrorMessageProps {
  name: string;
  inputValue: string;
  isValid: boolean;
}

export interface notEqualPasswordProps {
  passwordValue: string;
  checkValue: string;
}
