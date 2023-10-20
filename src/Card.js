import image from './image.png';
import LogoImg from './logo.png'
import './Card.css';

function Card({src, createdAt, content}) {
  return (
    <div className='Card'>
        {
            src
            ?(
            <div className='card-image-container'>
                <img className = 'Card-image' src={image} alt = "고양이"/>  
            </div>)
            :(
                <div className='card-image-container Card-image'>
                    <img src={LogoImg} alt='logoImg' className='no-img-logo'/>
                </div>
            )
        }
      <div className='contentContainer'>
        <div className='contentAgo'>10 minutes ago</div>
        <div className='content'>{content}</div>
        <div className='contentAt'>{createdAt}</div>
      </div>

    </div>
  )
}

export default Card;