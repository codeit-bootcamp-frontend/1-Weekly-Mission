import '../css/card.css'
import noImage from '../assets/images/no-image.svg'


function Cards ({items}) {
    return (
        items.map((item)=><Card key={item.id} items={item}/>)
    );
}


function Card ({items}) {
    const image = {
        backgroundImage: `url(${items.imageSource ?? noImage})`
    };

    const apiDate = new Date(items.createdAt);

    function dateCalculator (apiDate) {
        const myDate = new Date();
        const elapsedMinute = Math.floor((myDate - apiDate) / 1000 / 60) ;
        const elapsedHour = Math.floor((myDate - apiDate) / 1000 / 60 / 60) ;
        const elapsedDays = Math.floor((myDate - apiDate) / 1000 / 60 / 60 / 24) ;
        const elapsedMonth = Math.floor((myDate - apiDate) / 1000 / 60 / 60 / 24 / 31) ;
        const elapsedYear = Math.floor((myDate - apiDate) / 1000 / 60 / 60 / 24 / 31 / 12) ;
        
        if (elapsedMinute < 60) {
            if (elapsedMinute < 2) {
                return (`1 minute ago`);
            }
            return (`${elapsedMinute} minute${elapsedMinute ? 's' : ''} ago`)
        }
        if (elapsedHour < 24) {
            return (`${elapsedHour} hour${elapsedHour ? 's' : ''} ago`)
        }
        if (elapsedDays < 31) {
            return (`${elapsedDays} day${elapsedDays ? 's' : ''} ago`)
        }
        if (elapsedMonth < 12) {
            return (`${elapsedMonth} month${elapsedMonth ? 's' : ''} ago`)
        }
        if (elapsedYear) {
            return (`${elapsedYear} year${elapsedYear ? 's' : ''} ago`)
        }
    }
    const elapsedTime = dateCalculator(apiDate);
    const year = apiDate.getFullYear();
    const month = apiDate.getMonth() + 1;
    const days = apiDate.getDate();
    return (
        <a href={items.url} className='card-wrapper' target='_blank' rel='noopener noreferrer'>
            <div className='card-box'> 
                <div className='card-image' style={image} >
                </div> 
                <div className='card-text'> 
                    <div>{elapsedTime}</div>
                    <div className='text-description'>{items.description}</div>
                    <div>{`${year}. ${month}. ${days}`}</div>
                </div>
                
            </div>
        </a>
    );
}

export default Cards;