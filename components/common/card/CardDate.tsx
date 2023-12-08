import styled from "styled-components";

interface CardDateProps {
  set_date: string | undefined;
}

const CardDate = ({ set_date }: CardDateProps) => {
  return <Date>{set_date}</Date>;
};

const Date = styled.div`
  color: #333;
`;

export default CardDate;
