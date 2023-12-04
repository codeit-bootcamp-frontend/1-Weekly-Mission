import * as S from "./CardList.styled";
import { LinkDataType } from '@/pages/api/links.api';

interface LinksDataProps {
  links: LinkDataType[];
}

export default function CardList({ links }: LinksDataProps) {
  return (
    <S.CardList>
      {links.map(link => 
          <div key={link.id}>
            <Card link={link} />
          </div>
      )}
    </S.CardList>
  );
}

interface LinkItem {
  link: LinkDataType;
}

export function Card({ link }: LinkItem) {
  return (
    <S.Card>
      <S.Content>
        <S.Description></S.Description>
      </S.Content>
    </S.Card>
  )
}