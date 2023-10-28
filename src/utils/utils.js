export const formatDate = (value) => {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

export const filterLinks = (links, type, folderId) => {
  if (type === 'searchById') {
    return links.filter(link => link['id'] == folderId);
  }
  if (type === 'searchByKeyword') {
    return links.filter(link => link['title']?.includes(folderId));
  }
}

export const filterFolder = (links, folderId) => {
  if (!links) return;
  if (!folderId) return links;
  if (folderId * 1) return filterLinks(links, 'searchById', folderId);
  return filterLinks(links, 'searchByKeyword', folderId);
}