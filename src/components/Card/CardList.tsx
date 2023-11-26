import React from 'react';

import Card from './Card';
import * as S from './styles';

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
}

const CardList = ({ cards }: CardListProps) => {
  return (
    <S.CardListBox>
      {cards.map((card) => (
        <Card key={card.id} items={card} />
      ))}
    </S.CardListBox>
  );
};

export default CardList;
