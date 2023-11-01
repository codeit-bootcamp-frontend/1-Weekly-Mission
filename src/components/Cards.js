import React, { useState } from 'react';
import CardItem from './CardItem';



const Cards = ({personalfolderData}) => {
    const [prevKey, setPrevKey] = useState(null);
    
    if(!personalfolderData) return;
    const {data:personalfolder} = personalfolderData;
    return (
        <div className="section-title section-title-third">
            <div className='section-title-third-inner'>
                {personalfolder && personalfolder.map(item =>(
                    <a key={item.id} href={item.url} target='_blank'>
                        <CardItem item={item} prevKey={prevKey} setPrevKey={setPrevKey}/>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Cards;