import CardItem from "./CardItem";
import { styled } from "styled-components";
import { Link as TLink } from "@/lib/Type";
import Link from "next/link";

interface CardListProps {
  links?: TLink[];
}

const CardList = ({ links = [] }: CardListProps) => {
  return (
    <Container>
      <ListContent>
        <ListInner>
          {links.length > 0 ? (
            links.map((link) => {
              return (
                <Link
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <CardItem item={link} />
                </Link>
              );
            })
          ) : (
            <NoLinksFound>저장된 링크가 없습니다.</NoLinksFound>
          )}
        </ListInner>
      </ListContent>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

const ListContent = styled.div`
  width: 100%;
  max-width: 106rem;
  margin: 0 19rem;
`;

const ListInner = styled.div`
  display: flex;
  justify-content: flex-start;
  //flex-start;
  margin: 0 auto;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 2.5rem;
`;

export default CardList;

const NoLinksFound = styled.div`
  font-size: 1.6rem;
  width: fit-content;
  margin: 4rem auto;
`;
