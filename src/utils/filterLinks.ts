import { Link } from '@/types/Folder.types';

function filterLinks(links?: Link[], keyword?: string) {
  if (!links) return;
  if (!keyword) return links;

  const normalizedKeyword = keyword.toLowerCase().replace(/\s+/g, '');
  return links?.filter(({ url, title, description }) => {
    const searchText = `${url}${title}${description}`
      .toLowerCase()
      .replace(/\s+/g, '');

    return searchText.includes(normalizedKeyword);
  });
}

export default filterLinks;
