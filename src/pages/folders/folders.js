import searchIcon from '../../assets/images/shared-search.svg'
import './folders.css'
import Cards from '../../components/cards/card';
import { getFolder } from '../../api/api';
import { useEffect, useState } from 'react';

function SearchBar () {
    return (
        <div className='search-box'>
            <img src={searchIcon} alt='searchIcon'/>
            <form>
                <input type='text' placeholder='링크를 검색해 보세요.' className='search-input'/>
            </form>
        </div>
    );
}

function MainSection ({items}) {
    return (
        <div className='main'>
            <div className='main-box'>
                <SearchBar/>
                <div className='cards-grid'>
                    <Cards items = {items}/> 
                </div>
            </div>
        </div>
    );
}

function Profile({name, owner}) {
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

function Folders() {
    const [name, setName] = useState('');
    const [owner, setOwner] = useState({});
    const [items,setItems] = useState([]);

    useEffect(() => {
        const handleFolder = async()=>{
            const{ folder } = await getFolder();
            setName(folder.name);
            setOwner(folder.owner);
            setItems(folder.links);
        };
        handleFolder();
    }, []);

    return(
        <>
        <Profile name = {name} owner={owner}/>
        <MainSection items = {items}/>
        </>
    );
}

export default Folders;