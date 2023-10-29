import React, { useContext, useEffect, useState } from 'react';
import '../shared/shared.css';
import Search from '../shared/Search';
import Cards from '../shared/Cards';
import { getUserFolder, getUserFolderLinks } from '../../api/apiUrl';
import { AccountContext } from '../../contexts/AccountContext';
import AddLink from './AddLink';
import UserFolder from './UserFolder';
import { useParams } from 'react-router-dom';

const Folder = () => {
    const {account, userErrorMessage} = useContext(AccountContext)
    const [folders, setFolders] = useState([])
    const [personalfolder, setPersonalfolder] = useState([]);
    const [folderErrorMessage, setFolderErrorMessage] = useState("");
    const {id} = account;
    const {folderId} = useParams();

    const handleUserFloders = async () => {
        const all = {
            id:9999,
            name: "전체",
            user_id: 1,
        }
        try{
            const {data} = await getUserFolder(id);
            if(!data) return;
            setFolders([all, ...data])
        }
        catch(error){
            userErrorMessage(error);
        }
    }
    
    const handleFolderLoad = async () => {
        try{
            const {data} = await getUserFolderLinks(id, folderId);
            if(!data) return;
            setPersonalfolder(data)
        }
        catch(error){
            setFolderErrorMessage(error.message);
        }
    }
    useEffect(() => {
        handleUserFloders();
        handleFolderLoad();
      }, [id ,folderId]);
    return (
        <div className='folder'>
            <div className="section-title section-title-first">
                <AddLink/>
            </div>
            <Search/>
            <UserFolder folders={folders} folderId={folderId}/>
            {personalfolder?.length > 0 ? <Cards personalfolder={personalfolder}/> : 
            <h3 className='noLink'>저장된 링크가 없습니다</h3>}
            {folderErrorMessage && <h2>{folderErrorMessage.message}</h2>}
        </div>
    );
};

export default Folder;