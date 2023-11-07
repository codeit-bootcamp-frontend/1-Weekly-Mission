import styled from "styled-components";

const CardDate = ({ set_date }) => {
  return <Date>{set_date}</Date>;
};

const Date = styled.div`
  color: #333;
`;

export default CardDate;
