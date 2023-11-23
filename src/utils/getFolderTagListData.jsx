function getFolderTagListData(isSelectedTagNeeded = false) {
  const TagListDataEls = isSelectedTagNeeded
    ? document.querySelectorAll(".tag.checked")
    : document.querySelectorAll(".tag");

  const TagListData = [...TagListDataEls].map((tagData) => ({
    id: tagData?.attributes.id.value,
    dataCount: tagData?.dataset.count,
    name: tagData?.innerHTML,
  }));
  console.log(TagListData);
  return [...TagListData]; // TagListData: nodeList type
}

export default getFolderTagListData;
