import styled from "styled-components";
import { Link } from "react-router-dom";
import {ReactComponent as StarImg} from '../../assets/Star.svg'

export const StyledLink = styled(Link)`
  position : relative;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  border-radius: 18px 18px 15px 15px;
  width: 340px;
  height: 334px;
  cursor: point;
  color: black;
  text-decoration: none;

  &:hover{
    border: 2px solid #6d6afe;
  }
`
  // overflow : hidden;
;

export const ImageContainer = styled.div`
  width: 340px;
  height: 200px;
`
  // &:hover {
  //   transform: scale(1.1);
  //   transition: 0.5s;
  // }
;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 15px 15px 0px 0px;
`;

export const Star = styled(StarImg)`
  position: absolute;
  top: 15px;
  right: 15px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px 20px;
`;

export const Option = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    position : relative;
    width: 21px;
    height: 17px;
  }
`;

export const PopOver = styled.div`
  display: flex;
  flex-direction: column;
  position : absolute;
  top : 230px;
  right : -20px;
  z-index : 10;
  overflow: visible; 
`

export const Description = styled.span`
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;