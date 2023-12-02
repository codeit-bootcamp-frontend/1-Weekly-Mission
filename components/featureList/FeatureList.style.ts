import { RESPONSIBLE_MEDIA_QUERIES } from "@/constants/mediaQueries";
import Image from "next/image";
import styled from "styled-components";

export const ArticleWrap = styled.div`
  background-color: var(--linkbrary-white);
  padding: 7rem 0 12rem;
  ${RESPONSIBLE_MEDIA_QUERIES.tablet} {
    padding: 3rem 0 12rem;
  }
  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    padding: 4rem 0 4rem;
  }
`;
