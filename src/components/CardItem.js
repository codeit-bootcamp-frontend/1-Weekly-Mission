import React from 'react';
import logoImg from "../img/svg/noImgLogo.svg";
import starImg from "../img/svg/star.svg";
import kebabImg from '../img/svg/kebab.svg';
import mobileAddImg from '../img/svg/mobileAdd.svg';
import { getTimeDiff } from '../utils/postTime';
import { isLocation } from '../utils/location';


const cebabOption = [{option: "삭제하기", name: "링크 삭제"},{option: "폴더에 추가", name: "폴더에 추가"}]

const CardItem = ({item, prevKey, handleCebabClick, iscebabClick, handleListClick}) => {
    const imgStyle = {
        'backgroundImage': `URL(${item.image_source})`,
    }
    const nowDate = getTimeDiff(new Date(item.created_at));
    return (
        <div className='card'>
            <div className="card-img-wrap">
                {!item.image_source ? <img className="logo-img" src={logoImg} alt='로고이미지'/> :
                <div className='card-img' style={imgStyle}></div>}
                {isLocation() ? <img className="star-img" src={starImg} alt='별모양 버튼'/> : null}
            </div>
            <div className='card-inpormation'>
                <div className='card-inpormation-first-line'>
                    <div className='time'>{nowDate}</div>
                    {isLocation() ?<img className='Kebab-botton'  src={kebabImg} alt='케밥이미지' onClick={(event) => handleCebabClick(event, item.id)}/> : null}
                </div>
                <p>{item.description ? item.description : "데이터가 없습니다"}</p>
                <div className='day'>{item.created_at.split("T")[0]}</div> 
                <ul className='folder-botton' style={{display: prevKey === item.id ? iscebabClick ? "flex" : "none" : "none"}} >
                 {cebabOption.map((list, index) => {
                    return <li key={index} onClick={(event)=>{handleListClick(event, list.name, list.option, item.url)}}>{list.option}</li>
                 })}
                </ul>
                <h4><span>폴더 추가</span><img src={mobileAddImg} alt="추가이미지"/></h4>
            </div>  
        </div>
    );
};

export default CardItem;
