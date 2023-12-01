import { ReactNode, useEffect } from 'react';
import Nav from './nav/nav';
import { axiosInstance } from '@/utils/axios';
import axios from 'axios';
import { userData } from '@/src/type/userType';
import { useAsync } from '@/utils/useAsync';
import { getuid } from 'process';
import FolderButton from '../folder/toolBar/folderButton';

interface Props {
  children: ReactNode;
}

interface Profile {
  [key: string]: string;
}

export default function PageLayout({ children }: Props) {
  const getUser = () => axiosInstance.get('users/1');
  const { data } = useAsync(getUser);
  const userData = data?.data[0];
  const profile = userData
    ? {
        email: userData.email,
        image_source: userData.image_source,
      }
    : null;

  return (
    <div>
      <Nav profile={profile} />
      <FolderButton text='전체' />
    </div>
  );
}
