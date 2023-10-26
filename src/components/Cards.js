import React from 'react';
import logoImg from "../img/svg/noImgLogo.svg";
import { getTimeDiff } from '../utils/postTime';





/* 각 카드 컴포넌트 */
function CardItem({item}) {
    const imgStyle = {
        'backgroundImage': `URL(${item.imageSource})`,
    }

    const nowDate = getTimeDiff(new Date(item.createdAt));

    return (
        <div className='card'>
            <div className="card-img-wrap">
                {!item.imageSource ? <img className="logoImg" src={logoImg} alt='로고이미지'/> :
                <div className='card-img' style={imgStyle}></div>}
            </div>
            <div className='card-inpormation'>
                <div className='time'>{nowDate}</div>
                <p>{item.description}</p>
                <div className='day'>{item.createdAt.split("T")[0]}</div>  
            </div>  
        </div>
    
    )
}

const Cards = ({personalfolder}) => {
    const {links} = personalfolder;
    return (
        <div className="section-title section-title-third">
            <div className='section-title-third-inner'>
                {links && links.map(item =>(
                    <a key={item.id} href={item.url} target='_blank'>
                        <CardItem item={item}/>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Cards;