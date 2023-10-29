import React, { useContext } from 'react';
import { useFetch, useQueryFetch } from '../../api/useFetch';
import { AccountContext } from '../../contexts/AccountContext';
import { useParams } from 'react-router-dom';
import Search from '../shared/Search';
import Cards from '../shared/Cards';
import AddLink from './AddLink';
import UserFolder from './UserFolder';
import '../shared/shared.css';

const Folder = ({setIsHeaderStyle}) => {
    const {account, errorMessage} = useContext(AccountContext)
    const {id} = account;
    const {data:folderDataObject} = useFetch(`users/${id}/folders`);
    const {folderId} = useParams();
    const {data: personalfolderData} = useQueryFetch(`users/${id}/links`, folderId, id);
    setIsHeaderStyle(true)
  
    if(!folderDataObject) return;
    const all = {
        id:9999,
        name: "전체",
        user_id: 1,
    }
    const {data:folderData} = folderDataObject;
    const newFolderData = [all, ...folderData];

    if(!personalfolderData) return;
    const {data:personalfolder} = personalfolderData;
   
    return (
        <div className='folder'>
            <div className="section-title section-title-first">
                <AddLink/>
            </div>
            <Search/>
            <UserFolder folders={newFolderData} folderId={folderId}/>
            {personalfolder?.length > 0 ? <Cards personalfolder={personalfolder}/> : 
            <h3 className='noLink'>저장된 링크가 없습니다</h3>}
            {errorMessage && <h2>{errorMessage.message}</h2>}
        </div>
    );
};

export default Folder;