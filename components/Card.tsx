import { dateCalculator } from '../utils/dateCalculator';
import * as C from '../style/styled-component/Card/CardStyledComponent';
import { SampleFolderData } from '../pages/shared';
import styled from 'styled-components';
import Image from 'next/image';

interface CardProps {
  item: SampleFolderData;
}

export default function Card({ item }: CardProps) {
  const apiDate = new Date(item.createdAt);
  const elapsedTime = dateCalculator(apiDate);
  const year = apiDate.getFullYear();
  const month = apiDate.getMonth() + 1;
  const days = apiDate.getDate();

  if (item.imageSource === undefined) {
    item.imageSource = '/no-image.svg';
  }

  return (
    <C.CardWrapperLink href={item.url} target="_blank">
      <C.CardBox>
        <C.CardImgDiv>
          <Div>
            <Image
              className="card-img"
              fill
              sizes="100%"
              src={item.imageSource}
              alt={item.title}
              style={{ objectFit: 'cover' }}
              priority
            />
          </Div>
        </C.CardImgDiv>
        <C.CardText>
          <C.CardTimeAgo>{elapsedTime}</C.CardTimeAgo>
          <C.TextDescription>{item.description}</C.TextDescription>
          <C.CardYear>{`${year}. ${month}. ${days}`}</C.CardYear>
        </C.CardText>
      </C.CardBox>
    </C.CardWrapperLink>
  );
}

const Div = styled.div`
  position: relative;
  width: 340px;
  height: 234px;
`;
