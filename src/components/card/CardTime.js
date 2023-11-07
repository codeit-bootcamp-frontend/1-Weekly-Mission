import styled from "styled-components";

const CardTime = ({ set_time }) => {
  return <Time>{set_time}</Time>;
};

const Time = styled.p`
  color: #666;
  font-size: 1.3rem;
`;

export default CardTime;
