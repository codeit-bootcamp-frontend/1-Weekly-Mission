// -- formatted api response의 타입 --
// setFolderInfoData({ folderName, userName, userImg });
export interface IFolderInfoData {
  folderName?: string; // Folder -> name
  userName?: string; // Folder -> Owner -> name
  userImg?: string; // Folder -> Owner -> profileImageSource
}

// -- original api response의 타입 (api responsed 그대로의 타입) --
// export interface IFolderInfoData {
//   folder: Folder;
// }

// export interface Folder {
//   id: number;
//   name: string;
//   owner: Owner;
//   links: Link[];
//   count: number;
// }

// export interface Link {
//   id: number;
//   createdAt: string;
//   url: string;
//   title: string;
//   description: string;
//   imageSource?: string;
// }

// export interface Owner {
//   id: number;
//   name: string;
//   profileImageSource: string;
// }
