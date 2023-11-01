import Card from "../../../../components/Card/Card";

import * as S from "../../../../components/CardList/CardListStyle";

function Link({ link }) {
  const {
    created_at: createdAt,
    description,
    image_source: imageSource,
    title,
    url,
  } = link;
  return <Card link={{ createdAt, description, imageSource, title, url }} />;
}

function LinkList({ links }) {

  if (!links) {
    return <div>No links available.</div>;
  }
  return (
    <S.CardListContainer>
      {links.map((link) => (
        <Link key={link.id} link={link} />
      ))}
    </S.CardListContainer>
  );
}

export default LinkList;
