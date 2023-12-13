import styled from 'styled-components';
import Link from 'next/link';
import { DeviceQuery } from '@/styles/media';

export const Container = styled.div`
  width: 100%;
  padding: 32px 104px 64px;
  background-color: #111322;
  margin-top: 60px;

  ${DeviceQuery.mobile`
    padding: 32px 32px 64px;
    margin-top: 40px;
  `}
`;
export const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #676767;

  ${DeviceQuery.mobile`
    display: grid;
    grid-template-areas:
      'footer-links sns'
      'footer-logo .';
    justify-content: space-between;
    row-gap: 60px;
  `}
`;

export const Span = styled.span`
  grid-area: footer-logo;
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 30px;
  text-decoration: none;
  grid-area: footer-links;
`;

export const Links = styled(Link)`
  color: #676767 !important;

  &:visited,
  &:hover {
    color: #0000ff;
  }
`;
export const SnsContainer = styled.div`
  display: flex;
  gap: 12px;
  grid-area: sns;
`;
