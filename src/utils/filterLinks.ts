import { Link } from '@pages/Folder/Folder.types';

function filterLinks(links?: Link[], keyword?: string) {
  if (!links) return;
  if (!keyword) return links;

  const lowered = keyword.toLowerCase();
  return links?.filter(({ url, title, description }) => {
    return (
      url?.toLowerCase().includes(lowered) ||
      title?.toLowerCase().includes(lowered) ||
      description?.toLowerCase().includes(lowered)
    );
  });
}

export default filterLinks;
