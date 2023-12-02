import { HTMLAttributes } from "react";
import { IFolderTagData } from "./types/common.types";

function getFolderTagListData(isSelectedTagNeeded = false) {
  // const isBrowser = typeof window !== "undefined";

  // const TagListDataEls =
  //   isBrowser && isSelectedTagNeeded
  //     ? document.querySelectorAll(".tag.checked")
  //     : document.querySelectorAll(".tag");

  const mock = [
    {
      id: 1,
      name: "전체",
      link: {
        count: 3,
      },
    },
    {
      id: 1,
      name: "전체",
      link: {
        count: 3,
      },
    },
  ];

  // const TagListData: IFolderTagData[] = [...TagListDataEls].map((tagData) => {
  //   const el = tagData as HTMLElement;
  //   const attributes = tagData?.attributes as HTMLAttributes<HTMLButtonElement>;

  //   return {
  //     id: Number(attributes.id),
  //     name: String(tagData?.innerHTML),
  //     link: {
  //       count: Number(el?.dataset.count),
  //     },
  //   };
  // });
  const TagListData = mock;

  return [...TagListData]; // TagListData: nodeList type
}

export default getFolderTagListData;
