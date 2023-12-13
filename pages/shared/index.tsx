import axios from '@/lib/axios';
import { Header, Article} from '@/components';
import Layout from '@/components/Layout/Layout';

export async function getStaticProps() {
  const response = await axios.get('/sample/folder');
  const folderData = response?.data?.folder;

  return {
    props: {
      folderData,
    },
  };
}

interface Props {
  folderData: Items;
}

export default function SharedPage({ folderData }: Props) {
  return (
    <Layout>
      <Header items={folderData} />
      <Article links={folderData.links} />
    </Layout>
  );
}
