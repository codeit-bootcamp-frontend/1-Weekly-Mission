import React from 'react';
import CardItem from './CardItem';



const Cards = ({linkCardsData, prevKey, handleCebabClick, handleListClick, iscebabClick}) => {
    
    if(!linkCardsData) return;
    const {data:linksData} = linkCardsData;

    return (
        <div className="section-title section-title-third">
            <div className='section-title-third-inner'>
                {linksData && linksData.map(item =>(
                    <a key={item.id} href={item.url} target='_blank'>
                        <CardItem item={item} prevKey={prevKey} 
                        handleCebabClick={handleCebabClick} handleListClick={handleListClick} iscebabClick={iscebabClick}/>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Cards;