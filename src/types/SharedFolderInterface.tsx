import CardInterface from "./CardInterface";

export default interface SharedFolderInterface {
  folder: {
    id: string;
    links: CardInterface[];
    name: string;
    owner: {
      id: string;
      name: string;
      profileImageSource?: string;
    };
  };
}
