import { LinkType } from 'constants/dataType';
import { SampleLinkType } from 'constants/sampleDataType';

export function filterLink(links: LinkType[] | SampleLinkType[], search: boolean, keyword: string): any {
  //왜 리턴타입이 안되지..
  if (!search) return links;
  if (keyword === '') return [];
  const data = links.filter((link) => link.title?.includes(keyword) || link.url.includes(keyword) || link.description?.includes(keyword));

  return data;
}
