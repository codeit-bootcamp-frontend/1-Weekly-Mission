import { Link } from '@pages/Folder/Folder.types';

function filterLinks(links?: Link[], keyword?: string) {
  if (!links) return;
  if (!keyword) return links;

  const lowered = keyword.toLowerCase().split(' ').join('');
  return links?.filter(({ url, title, description }) => {
    const searchText = `${url}${title}${description}`
      .toLowerCase()
      .split(' ')
      .join('');

    return searchText.includes(lowered);
  });
}

export default filterLinks;
