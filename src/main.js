import searchIcon from './assets/images/shared-search.svg'
import './main.css'
import Cards from './card';
import { getFolder } from './api';
import { useEffect, useState } from 'react';

function SearchBar () {
    return (
        <div className='search-box'>
            <img src={searchIcon} alt='searchIcon'/>
            <from>
                <input type='text' placeholder='링크를 검색해 보세요.' className='search-input'/>
            </from>
        </div>
    );
}

function MainSection () {
    return (
        <div className='main'>
            <div className='main-box'>
                <SearchBar/>
                <Cards/> 
            </div>
        </div>
    );
}

function Profile() {
    const [name, setName] = useState('');
    const [owner, setOwner] = useState({});
    const handleProfile = async()=>{
        const{ folder } = await getFolder();
        setName(folder.name);
        setOwner(folder.owner);
    }

    useEffect(() => {handleProfile()}, []);

    console.log(name, owner);

    return (
        <div className='profile'>
            <div className='profile-img-name'>
                <img src={owner.profileImageSource} alt='profile-img' className='profile-img'/>
                <div>
                    @{owner.name}
                </div>
            </div>
            <div className='profile-name'>
                {name}
            </div>
        </div>
    );
}

function Main() {
    return(
        <>
        <Profile />
        <MainSection />
        </>
    );
}

export default Main;