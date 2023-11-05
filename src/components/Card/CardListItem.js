const CardListItem = ({ id, children }) => {
  return <li key={id}>{children}</li>;
};

export default CardListItem;
