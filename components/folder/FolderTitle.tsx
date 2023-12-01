import { FolderType } from '@/constants/dataType';
import styled from 'styled-components';
import { findFolderTitle } from '@/lib/utils/findFolderTitle';

interface Props {
  folders: FolderType[];
  selectedFolderId: number;
}

function FolderTitle({ folders, selectedFolderId }: Props) {
  const title = findFolderTitle(folders, selectedFolderId);

  return <FolderTitleStyle>{title}</FolderTitleStyle>;
}

export default FolderTitle;

const FolderTitleStyle = styled.div`
  font-size: 2.4rem;
  font-weight: 600;
  letter-spacing: -0.2px;
  display: flex;
  align-items: center;
`;
