import Nav from '@/components/common/nav/nav';
import PageLayout from '@/components/common/pageLayout';
import { useAsync } from '@/utils/useAsync';
import { axiosInstance } from '@/utils/axios';
import ToolBar from '@/components/folder/toolBar/toolbar';
import { FolderData } from '@/src/type/folderType';
import CardList from '@/components/folder/cardList';
import { useGetLinks } from '@/components/folder/useGetLinks';
import { useSearchParams } from 'next/navigation';

export default function Folder() {
  const getFolders = () => axiosInstance.get('users/1/folders');
  const { data } = useAsync(getFolders);
  const folders: FolderData[] | undefined = data?.data;

  return (
    <div>
      <PageLayout>
        <ToolBar folders={folders} />
        <CardList />
      </PageLayout>
    </div>
  );
}
