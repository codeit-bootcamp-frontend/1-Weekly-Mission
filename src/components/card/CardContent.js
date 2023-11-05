import styled from "styled-components";

const CardContent = ({ children, url }) => {
  return <Content href={url}>{children}</Content>;
};

const Content = styled.a`
  height: 4.9rem;
  align-self: stretch;
  overflow: hidden;
  color: var(--linkbrary-black);
  text-overflow: ellipsis;
  white-space: break-spaces;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1.6rem;
  line-height: 2.4rem;
  text-decoration: none; /* assuming you want to remove underlines for links */
`;

export default CardContent;
