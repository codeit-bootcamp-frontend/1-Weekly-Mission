import CardItem from "./CardItem";
import { styled } from "styled-components";
import "../styles/cardList.css";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

const ListContent = styled.div`
  width: 100%;
  max-width: 1060px;
  margin: 0 19rem;
`;

const ListInner = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 2.5rem;
`;

const CardList = ({ folderArray = [] }) => {
  const items = folderArray;

  return (
    <Container>
      <ListContent>
        <ListInner>
          {items &&
            items.map((item) => {
              return (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <CardItem item={item} />
                </a>
              );
            })}
        </ListInner>
      </ListContent>
    </Container>
  );
};

export default CardList;
