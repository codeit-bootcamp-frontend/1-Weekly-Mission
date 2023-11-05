import Card from "../card/Card";
import * as S from "./CardList.style";

const CardList = ({ links, modalComponent, setModalComponent, folders, isShared }) => {
  if (!links?.length) return <S.EmptyListMessage>저장된 링크가 없습니다.</S.EmptyListMessage>;
  return (
    <S.CardList>
      {links?.map((link) => (
        <Card
          folders={folders}
          link={link}
          key={link.id}
          modalComponent={modalComponent}
          setModalComponent={setModalComponent}
          isShared={isShared}
        />
      ))}
    </S.CardList>
  );
};

export default CardList;
