import React, { useContext, useEffect, useState } from 'react';
import '../shared/shared.css';
import Search from '../shared/Search';
import Cards from '../shared/Cards';
import { getFolder } from '../../api/apiUrl';
import { AccountContext } from '../../contexts/AccountContext';
import AddLink from './AddLink';
import UserFolder from './UserFolder';

const Folder = () => {
    const {account, userErrorMessage} = useContext(AccountContext)
    const {name, profileImageSource} = account;
    const [personalfolder, setPersonalfolder] = useState({});
    const [folderErrorMessage, setFolderErrorMessage] = useState("");
    
    const handleFolderLoad = async () => {
        try{
            const {folder:{links, name:title }} = await getFolder();
            setPersonalfolder({links,title})
        }
        catch(error){
            setFolderErrorMessage(error);
        }
    }

    const {title} = personalfolder;
    
    useEffect(() => {
        handleFolderLoad();
      }, []);
    return (
        <div className='folder'>
            <div className="section-title section-title-first">
                <AddLink/>
            </div>
            <Search/>
            <UserFolder/>
            <Cards personalfolder={personalfolder}/>
            {folderErrorMessage && <h2>{folderErrorMessage.message}</h2>}
        </div>
    );
};

export default Folder;