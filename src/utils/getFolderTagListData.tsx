import { IFolderTagNameListData } from "./types/common.types";

function getFolderTagListData(isSelectedTagNeeded = false) {
  const TagListDataEls: HTMLElement = isSelectedTagNeeded
    ? document.querySelectorAll(".tag.checked")
    : document.querySelectorAll(".tag");

  const TagListData: IFolderTagNameListData[] = [...TagListDataEls].map(
    (tagData) => ({
      id: tagData?.attributes?.id.value,
      dataCount: tagData?.dataset.count,
      name: tagData?.innerHTML,
    })
  );
  return [...TagListData]; // TagListData: nodeList type
}

export default getFolderTagListData;
