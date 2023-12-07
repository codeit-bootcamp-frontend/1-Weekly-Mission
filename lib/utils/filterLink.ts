import { LinkType } from '@/constants/dataType';
import { SampleLinkType } from '@/constants/sampleDataType';

export function filterLink(links: LinkType[] | SampleLinkType[], search: boolean, keyword: string): any {
  if (!search) return links;
  if (keyword === '') return [];
  keyword = keyword.toLowerCase();
  const data = links.filter(
    (link) => link.title?.toLowerCase().includes(keyword) || link.url.toLowerCase().includes(keyword) || link.description?.toLowerCase().includes(keyword)
  );

  return data;
}
