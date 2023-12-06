import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import style from "./FolderItem.module.css";
import clsx from "clsx";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
}
function FolderItem({ id, name }: Props) {
  const searchParams = useSearchParams();
  const folderIdParam = searchParams.get("folderId");
  const router = useRouter();

  //const FOLDERID_QUERY = "?folderId=";
  return (
    <Link
      href={{ pathname: `${router.pathname}`, query: { folderId: id } }}
      className={clsx(style.button, {
        [style.buttonClicked]: folderIdParam === id,
      })}
      id={id}
    >
      {name}
    </Link>
  );
}
export default FolderItem;
