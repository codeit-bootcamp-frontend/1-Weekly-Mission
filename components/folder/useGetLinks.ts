import { axiosInstance } from '@/utils/axios';
import { useAsync } from '@/utils/useAsync';
import { useCallback, useEffect } from 'react';

export const useGetLinks = (folderId: string | null) => {
  const id = folderId !== null ? folderId : 'all';
  const getLinks = useCallback(
    () => axiosInstance.get(`users/1/links?folderId=${id}`),
    [id]
  );
  const { execute, loading, error, data } = useAsync(getLinks);

  useEffect(() => {
    if (id !== 'all') {
      execute();
    }
  }, [id]);

  return { execute, loading, error, data };
};
