import { IFolderTagData } from "./types/common.types";

function getFolderTagListData(isSelectedTagNeeded = false) {
  const TagListDataEls = isSelectedTagNeeded
    ? document.querySelectorAll(".tag.checked")
    : document.querySelectorAll(".tag");

  const TagListData: IFolderTagData[] = [...TagListDataEls].map(
    (tagData: any) => ({
      id: tagData?.attributes?.id.value,
      name: tagData?.innerHTML,
      link: {
        count: tagData?.dataset.count,
      },
    })
  );
  return [...TagListData]; // TagListData: nodeList type
}

export default getFolderTagListData;
