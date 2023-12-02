import { BodyRegular1, BodyRegular2, Caption } from '@/styles/typography';
import styled from 'styled-components';

const Container = styled.div`
  width: 340px;
  height: 334px;
  border-radius: 15px;
  box-shadow: 0px 5px 25px 0px #00000014;
  background-color: white;
`;

const PrevImg = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  border-radius: 15px 15px 0 0;
  object-fit: cover;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 15px 20px;
`;

const Time = styled.div`
  color: ${props => props.theme['dark_grey']};
  ${Caption}
`;

const Description = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  ${BodyRegular1}
`;

const Date = styled.div`
  overflow: hidden;
  color: ${props => props.theme['dark_dark_grey']};

  text-overflow: ellipsis;
  white-space: nowrap;
  ${BodyRegular2}
`;

export { Container, PrevImg, CardContainer, Time, Description, Date };
