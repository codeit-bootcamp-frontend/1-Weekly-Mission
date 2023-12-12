import styled from 'styled-components';
import { DeviceQuery } from '@/styles/media';

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 33px 200px 32px;
  width: 100%;
  background-color: #f0f6ff;

  ${DeviceQuery.tablet`
    padding-left: 32.5px;
    padding-right: 32.5px;
  `}

  ${DeviceQuery.mobile`
    padding-top: 18px;
    padding-bottom: 17px;
  `}
`;

export const Inform = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  ${DeviceQuery.mobile`
    span {
      display: none;
    }
  `}
`;

export const Profile = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 47px;
`;
