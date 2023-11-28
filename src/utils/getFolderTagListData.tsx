import { HTMLAttributes } from "react";
import { IFolderTagData } from "./types/common.types";

function getFolderTagListData(isSelectedTagNeeded = false) {
  const TagListDataEls = isSelectedTagNeeded
    ? document.querySelectorAll(".tag.checked")
    : document.querySelectorAll(".tag");

  const TagListData: IFolderTagData[] = [...TagListDataEls].map((tagData) => {
    const el = tagData as HTMLElement;
    const attributes = tagData?.attributes as HTMLAttributes<HTMLButtonElement>;

    return {
      id: Number(attributes.id),
      name: tagData?.innerHTML,
      link: {
        count: Number(el?.dataset.count),
      },
    };
  });
  return [...TagListData]; // TagListData: nodeList type
}

export default getFolderTagListData;
