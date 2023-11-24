import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardWrapper = styled(Link)`
  position: relative;
  width: 340px;
  height: 365px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  &:hover .card-img {
    transform: scale(1.3);
  }
`;

export const CardBox = styled.div`
  width: 340px;
  height: 234px;
  background-color: #fff;
  border-radius: 15px;
`;

export const CardImgDiv = styled.div`
  overflow: hidden;
  border-radius: 15px 15px 0px 0px;
`;

export const CardImg = styled.img`
  width: 340px;
  height: 234px;
  object-fit: cover;
`;

export const CardText = styled.div`
  display: flex;
  padding: 15px 20px;
  flex-direction: column;
  gap: 10px;
`;

export const CardTimeDIv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardTimeAgo = styled.div`
  color: #666;
  font-size: 13px;
`;

export const TextDescription = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #000;
`;

export const CardYear = styled.div`
  color: #333;
  font-size: 14px;
`;

export const KebabButton = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  z-index: 1;
  background-color: white;
`;

export const KebabDiv = styled.div`
  width: 100px;
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
`;

export const KebabPlus = styled.div`
  text-align: center;
  width: 100px;
  border: none;
  background-color: white;
  padding: 7px 12px;
  color: #333236;
  font-size: 14px;
`;

export const KebabDelete = styled.div`
  text-align: center;
  width: 100px;
  border: none;
  padding: 7px 12px;
  background: #e7effb;
  color: #6d6afe;
  font-size: 14px;
`;

export const StarImg = styled.img`
  position: absolute;
  top: 15px;
  right: 15px;
`;

export const CardButton = styled.button`
  display: none;
  padding: 8px 24px;
  border-radius: 20px;
  border: 1px solid #6d6afe;
  background: #6d6afe;
  color: #e7effb;
  text-align: center;
  font-weight: 500;
  @media (max-width: 767px) {
    display: block;
    position: fixed;
    bottom: 101px;
    z-index: 1;
  }
`;

export const CardButtonDiv = styled.div`
  display: flex;
  gap: 5px;
`;
