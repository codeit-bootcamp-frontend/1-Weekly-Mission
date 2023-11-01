import React, { useContext } from 'react';
import AddInputSection from '../components/AddInputSection';
import Search from '../components/Search';
import UserFolder from '../components/UserFolder';
import Cards from '../components/Cards';
import { AccountContext } from '../contexts/AccountContext';
import { useFetch, useQueryFetch } from '../hooks/useFetch';
import { useParams } from 'react-router-dom';



const Folder = () => {
    const {account} = useContext(AccountContext)
    const {id} = account;
    const {data:folderDataObject, 
        errorMessage:foldersErrorMessage} = useFetch(`users/${id}/folders`, id);
    const {folderId} = useParams();
    const {data: personalfolderData, 
        errorMessage: linksErrorMessage} = useQueryFetch(`users/${id}/links`, folderId, id);

    return (
        <div className='folder'>
            <AddInputSection/>
            <Search/>
            {!foldersErrorMessage ? <UserFolder folderDataObject={folderDataObject} folderId={folderId} />:
            foldersErrorMessage && <div className='user-folder'>{foldersErrorMessage}</div>}
            {!linksErrorMessage ? personalfolderData?.data.length > 0 ? <Cards personalfolderData={personalfolderData}/> : 
            <h3 className='noLink'>저장된 링크가 없습니다</h3> 
            : <div className="section-title section-title-third">{linksErrorMessage}</div>}
        </div>
    );
};

export default Folder;