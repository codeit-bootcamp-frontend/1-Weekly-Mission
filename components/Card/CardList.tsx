import styled from "styled-components";

import { FolderItem } from "@/types/api";
import Card from "./Card";

interface CardListProps {
  cards: {
    id: number;
    createdAt?: string;
    created_at?: string;
    updated_at?: string;
    url: string;
    title: string;
    description: string;
    imageSource?: string;
    image_source?: string;
    folder_id?: number;
  }[];
  folderData?: FolderItem[];
}

const CardList = ({ cards, folderData }: CardListProps) => {
  return (
    <StyledCardListBox>
      {cards.map((card) => (
        <Card key={card.id} item={card} folderData={folderData} />
      ))}
    </StyledCardListBox>
  );
};

export default CardList;

const StyledCardListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem 2.5rem;

  @media screen and (max-width: 1124px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
  }
`;
