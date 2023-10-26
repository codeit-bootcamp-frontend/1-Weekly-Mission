import React, { useContext, useEffect, useState } from 'react';
import './main.css';
import Search from './Search';
import Cards from './Cards';
import { getFolder } from '../api/apiUrl';
import { AccountContext } from '../contexts/AccountContext';

const Main = () => {
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
        <div className='main'>
            <div className="section-title section-title-first">
                <div className='section-title-inner'>
                    <div className='icon-wrap'>
                        <img src={profileImageSource && profileImageSource} alt='코드잇아이콘'/>
                    </div>
                    <h4>@{name && name}</h4>
                    {userErrorMessage && <h4>{userErrorMessage.message}</h4>}
                    <h3>{name && title}</h3>
                </div>
            </div>
            <Search/>
            <Cards personalfolder={personalfolder}/>
            {folderErrorMessage && <h2>{folderErrorMessage.message}</h2>}
        </div>
    );
};

export default Main;