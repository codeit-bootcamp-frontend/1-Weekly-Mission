import SharedFolderInterface from "./SharedFolderInterface";
import SharedUserInterface from "./SharedUserInterface";

export default interface SharedProps {
  sharedFolder?: SharedFolderInterface;
  sharedUser?: SharedUserInterface;
}
