import React, { useContext } from 'react';
import BookMark from '../components/BookMark';
import Search from '../components/Search';
import Cards from '../components/Cards';
import { AccountContext } from '../contexts/AccountContext';
import { useFetch, useQueryFetch } from '../hooks/useFetch';
import { useParams, useSearchParams } from 'react-router-dom';

const Shared = () => {
    const {account, errorMessage} = useContext(AccountContext)
    const [searchParams, setSearchParams] = useSearchParams();
    const userId = searchParams.get('user');
    const folderNumber = searchParams.get('folder');
    const {data:folderDataObject} = useFetch(`users/${userId}/folders`, userId);
   
    /* 즐겨찾기 데이터번호만 가져오는 함수 */
    const getBookmarkNumber = () => {
        if(!folderDataObject) return;
        const {data} = folderDataObject;
        const bookmarkNumber = data.filter(list => {
            if(list.id == folderNumber) {
                return list.id;
            }
        })
        return bookmarkNumber[0];
    }
    const {data: personalfolderData, 
        errorMessage: linksErrorMessage} = useQueryFetch(`users/${userId}/links`, getBookmarkNumber()?.id, userId);
    return (
        <div className='shared'>
            <BookMark bookmarkNumber={getBookmarkNumber()} account={account} errorMessage={errorMessage}/>
            <Search/>
            {!linksErrorMessage ? getBookmarkNumber()?.link.count > 0 ? <Cards linkCardsData={personalfolderData}/> : 
            <h3 className='noLink'>저장된 링크가 없습니다</h3> 
            : <div className="section-title section-title-third">{linksErrorMessage}</div>}
        </div>
    );
};

export default Shared;