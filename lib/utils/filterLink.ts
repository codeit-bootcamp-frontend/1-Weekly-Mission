import { LinkData } from '@/lib/types/dataType';
import { SampleLinkType } from '@/lib/types/sampleDataType';

export function filterLink(links: LinkData[] | SampleLinkType[], search: boolean, keyword: string): any {
  if (!search) return links;
  if (keyword === '') return [];
  keyword = keyword.toLowerCase();
  const data = links.filter(
    (link) => link.title?.toLowerCase().includes(keyword) || link.url.toLowerCase().includes(keyword) || link.description?.toLowerCase().includes(keyword)
  );

  return data;
}
