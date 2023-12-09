import Card from './Card';
import * as S from "./CardList.styled";
import { UserLinksDataProps } from '@/pages/folder';

export default function CardList({ links }: UserLinksDataProps) {
  return (
    <S.CardList>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </S.CardList>
  );
}

