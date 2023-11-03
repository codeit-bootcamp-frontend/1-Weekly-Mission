import React, { useContext, useState } from 'react';
import AddInputSection from '../components/AddInputSection';
import Search from '../components/Search';
import UserFolder from '../components/UserFolder';
import Cards from '../components/Cards';
import { AccountContext } from '../contexts/AccountContext';
import { useFetch, useQueryFetch } from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import ModalFolder from '../modal/ModalFolder';



const Folder = () => {
    const {account} = useContext(AccountContext);
    const [folderOption, setFolderOption] = useState(null);
    const [prevKey, setPrevKey] = useState(null);
    const [iscebabClick, setIscebabClick] = useState(false);
    const [newLink, setNewLink] = useState("");
    const {id} = account;
    const {folderId} = useParams();

    const {data:folderDataObject, 
        errorMessage:foldersErrorMessage} = useFetch(`users/${id}/folders`, id);
    const {data: linkCardsData, 
        errorMessage: linksErrorMessage} = useQueryFetch(`users/${id}/links`, folderId, id)

    const handleCebabClick = (event, itemId) => {
        event.preventDefault();
        setPrevKey(itemId);
        setIscebabClick(!iscebabClick);
    }   
    const handleListClick = (event, title, btn, item=null ) => {
        if(iscebabClick) {
            event.preventDefault();
            setIscebabClick(!iscebabClick);
        }
        if(title === '폴더에 추가' && !item) {
            alert("링크를 입력해주세요");
        } else {
        setFolderOption({
                title, 
                btnName: btn,
                dataItem: item,
                share: {id,folderId},
                folderData: folderDataObject,
            });
        }
        
    }    

    return (
        <div className='folder'>
            <AddInputSection handleListClick={handleListClick} newLink={newLink} setNewLink={setNewLink}/>
            <Search/>
            {!foldersErrorMessage ? <UserFolder folderDataObject={folderDataObject} folderId={folderId} handleListClick={handleListClick} />:
            foldersErrorMessage && <div className='user-folder'>{foldersErrorMessage}</div>}
            {!linksErrorMessage ? linkCardsData?.data.length > 0 ? <Cards linkCardsData={linkCardsData}
             prevKey={prevKey} handleCebabClick={handleCebabClick} handleListClick={handleListClick} iscebabClick={iscebabClick}/> : 
            <h3 className='noLink'>저장된 링크가 없습니다</h3> 
            : <div className="section-title section-title-third">{linksErrorMessage}</div>}
            {folderOption ? <ModalFolder folderOption={folderOption} setFolderOption={setFolderOption} setNewLink={setNewLink}/> : null}
        </div>
    );
};

export default Folder;