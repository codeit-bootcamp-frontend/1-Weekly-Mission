import Card from '../../UI/Card';

const CardDivide = ({ folderCards }) => {
  return (
    <>
      {folderCards?.map((folderCard) => {
        return (
          <div key={folderCard.id}>
            <Card item={folderCard} />
          </div>
        );
      })}
    </>
  );
};

export default CardDivide;
