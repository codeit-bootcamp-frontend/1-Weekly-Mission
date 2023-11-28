export interface ICardData {
  id: number;
  created_at: string;
  updated_at: null;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: number;
}

export interface ICardContainerProps {
  showTitle: boolean;
  cardListData: ICardData[];
  cardTitleText: string;
}
