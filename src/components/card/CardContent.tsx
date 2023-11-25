import { ReactNode } from "react";
import styled from "styled-components";

interface CardContentProps {
  title: string;
  description: string;
  url: string;
}

const CardContent = ({ title, description, url }: CardContentProps) => {
  return (
    <Content href={url}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Content>
  );
};

const Content = styled.a`
  height: 5.1rem;
  align-self: stretch;
  overflow: hidden;
  color: var(--linkbrary-black);

  text-decoration: none;
`;

const Title = styled.p`
  max-width: 20rem;

  font-size: 1.2rem;
  line-height: 150%;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Description = styled.p`
  font-size: 1.4rem;
  /* line-height: 1.5; */
  height: 3.2em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: break-spaces;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export default CardContent;
