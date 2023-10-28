import Button from '../Button/Button';
import './AddLink.style.css';

export default function AddLink() {
  const src = './assets/link.svg';
  return (
    <div className='AddLinkWrapper'>
      <img src={src} alt='link' />
      <input placeholder='링크를 추가해보세요' />
      <Button text='추가하기' />
    </div>
  );
}
