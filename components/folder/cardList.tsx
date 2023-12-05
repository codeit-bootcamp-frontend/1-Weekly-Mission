import { useAsync } from '@/utils/useAsync';
import Card from '../common/card/card';
import { useSearchParams } from 'next/navigation';
import { axiosInstance } from '@/utils/axios';
import { useEffect, useState } from 'react';
import { useGetLinks } from './useGetLinks';
import { useRouter } from 'next/router';

const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

export default function CardList() {
  // const [data, setData] = useState<any>();
  const searchParams = useSearchParams();
  const folderId: string | null = searchParams.get('folderId');
  // const getLinks = async (id: string | null) => {
  //   const res = await axiosInstance.get(`users/1/links?folderId=${id}`);
  //   setData(res);
  // };

  // useEffect(() => {
  //   if (folderId !== null) {
  //   }
  // }, [folderId]);

  const { data } = useGetLinks(folderId);
  console.log(data);

  return (
    <div className='grid tb:grid-cols-[repeat(2,21.25rem)] dt:grid-cols-[repeat(3,21.25rem)] gap-x-[1.25rem] gap-y-[1.5625rem]'>
      {arr.map((el, i) => (
        <Card key={i} />
      ))}
    </div>
  );
}
