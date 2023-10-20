import searchIcon from './assets/images/shared-search.svg'
import smile from './assets/images/shared-white.svg'
import './main.css'

function SearchBar () {
    return (
        <div>
            <img src={searchIcon} alt='searchIcon'/>
            링크를 검색해 보세요
        </div>
    );
}

function MainSection () {
    return (
        <div className='main'>
            <SearchBar />
            card??????????????????
        </div>
    );
}

function Profile() {
    return (
        <div className='profile'>
            <div className='profile-img'>
                <img src={smile} alt='smile'/>
            </div>
            <div>
                @codeit
            </div>
            <div>
                foldername??
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