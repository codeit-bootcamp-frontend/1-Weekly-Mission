import React from 'react';
import logoImg from "../img/svg/noImgLogo.svg";



/* 게시물 올린 시간 함수 */
function getTimeDiff(value) {
    const milliSeconds = new Date() - value;
    const seconds = milliSeconds / 1000;
    /* console.log(`달단위 ${seconds / 60 / 60 / 24 / 30}`) */
    if (seconds < 60) return `방금 전`;
    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}${Math.floor(minutes) > 1 ? "minutes ago" : "minute ago"}`;
    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}${Math.floor(hours) > 1 ? "hours ago" : "hour ago"}`;
    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}${Math.floor(days) > 1 ? "days ago" : "day ago"}`;
    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)}${Math.floor(weeks) > 1 ? "weeks ago" : "week ago"}`;
    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}${Math.floor(months) > 1 ? "months ago" : "month ago"}`;
    const years = days / 365;
    return `${Math.floor(years)}${Math.floor(years) > 1 ? "years ago" :"year ago"}`;
};

/* 각 카드 컴포넌트 */
function CardItem({item}) {
    const imgStyle = {
        'backgroundImage': `URL(${item.imageSource})`,
        'backgroundRepeat':'no-repeat',
        'backgroundSize':'cover',
        'backgroundPosition':'center center',
        'width': `100%`,
        'borderTopLeftRadius': "15px",
        'borderTopRightRadius': "15px",
    }

    const nowDate = getTimeDiff(new Date(item.createdAt));

    return (
        <div className='card'>
            <div className="card-img-wrap">
                {!item.imageSource ? <img className="logoImg" src={logoImg}/> :
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