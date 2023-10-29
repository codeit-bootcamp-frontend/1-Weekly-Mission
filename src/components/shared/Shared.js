import React, { useContext } from 'react';
import { useFetch, useQueryFetch } from '../../api/useFetch';
import { AccountContext } from '../../contexts/AccountContext';
import Search from './Search';
import Cards from './Cards';
import './shared.css';

const Shared = () => {
    const {account, errorMessage} = useContext(AccountContext)
    const {id, name, image_source: profileImageSource} = account;
    const {data:folderDataObject} = useFetch(`users/${id}/folders`);

    /* 즐겨찾기 데이터번호만 가져오는 함수 */
    function getBookmarkNumber() {
        if(!folderDataObject) return;
        const {data} = folderDataObject;
        const bookmarkNumber = data.filter(list => {
            if(list.name.indexOf('즐겨찾기') > -1) {
                return list.id;
            }
        })
        return bookmarkNumber[0];
    }

    const {data: personalfolderData} = useQueryFetch(`users/${id}/links`, getBookmarkNumber()?.id, id);
    if(!personalfolderData) return;
    const {data:personalfolder} = personalfolderData;
    /* 즐겨찾기 폴더 데이터 없음 */


    return (
        <div className='shared'>
            <div className="section-title section-title-first">
                <div className='section-title-inner'>
                    <div className='icon-wrap'>
                        <img src={profileImageSource && profileImageSource} alt='코드잇아이콘'/>
                    </div>
                    <h4>@{name && name}</h4>
                    {errorMessage && <h4>{errorMessage.message}</h4>}
                    <h3>{getBookmarkNumber() && getBookmarkNumber().name}</h3>
                </div>
            </div>
            <Search/>
            {personalfolder?.length > 0 ? <Cards personalfolder={personalfolder}/> : 
            <h3 className='noLink'>저장된 링크가 없습니다</h3>}
            {errorMessage && <h2>{errorMessage.message}</h2>}
        </div>
    );
};

export default Shared;