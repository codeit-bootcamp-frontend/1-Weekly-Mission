import React, { useContext} from 'react';
import { useFetch, useQueryFetch } from '../../hooks/useFetch';
import { AccountContext } from '../../contexts/AccountContext';
import { useParams } from 'react-router-dom';
import Search from '../shared/Search';
import Cards from '../shared/Cards';
import AddLink from './AddLink';
import UserFolder from './UserFolder';
import '../components.css';

const all = {
    id:9999,
    name: "전체",
    user_id: 1,
}

const Folder = () => {
    const {account} = useContext(AccountContext)
    const {id} = account;
    const {data:folderDataObject, 
        errorMessage:foldersErrorMessage} = useFetch(`users/${id}/folders`, id);
    const {folderId} = useParams();
    const {data: personalfolderData, 
        errorMessage: linksErrorMessage} = useQueryFetch(`users/${id}/links`, folderId, id);
 
    if(!folderDataObject || !personalfolderData) return;
    
    const {data:folderData} = folderDataObject;
    const newFolderData = [all, ...folderData];
    const {data:personalfolder} = personalfolderData;
    

    return (
        <div className='folder'>
            <div className="section-title section-title-first">
                <AddLink/>
            </div>
            <Search/>
            {!foldersErrorMessage ? <UserFolder folders={newFolderData} folderId={folderId} />:
            foldersErrorMessage && <div className='user-folder'>{foldersErrorMessage}</div>}
            {!linksErrorMessage ? personalfolder?.length > 0 ? <Cards personalfolder={personalfolder}/> : 
            <h3 className='noLink'>저장된 링크가 없습니다</h3> 
            : <div className="section-title section-title-third">{linksErrorMessage}</div>}
        </div>
    );
};

export default Folder;