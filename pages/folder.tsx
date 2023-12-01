import Nav from '@/components/common/nav/nav';
import PageLayout from '@/components/common/pageLayout';
import { useAsync } from '@/utils/useAsync';
import { axiosInstance } from '@/utils/axios';

export default function Folder() {
  const getFolders = () => axiosInstance.get('users/1/folders');
  const { data } = useAsync(getFolders);
  console.log(data);

  return (
    <div>
      <PageLayout>dkf</PageLayout>
    </div>
  );
}
