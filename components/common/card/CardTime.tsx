import styled from "styled-components";

interface CardDateProps {
  set_time: string | undefined;
}

const CardTime = ({ set_time }: CardDateProps) => {
  return <Time>{set_time}</Time>;
};

const Time = styled.p`
  color: #666;
  font-size: 1.3rem;
`;

export default CardTime;
