import { useState } from 'react';
import ModalPortal from '../../pages/portal';
import useModal from './useModal';
import * as Style from'./Modal.style.js';
import closeImg from '../../assets/_close.png';



const Modal = ({onClose, type, label}) => {
  const {title, input, subTitle, button, buttonName} = useModal(type, label);
 
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    const InputValue = e.target.value;
    setValue(InputValue);
  }

  const handleSubmit = (e) => {
    e.preventDefault;

  }

  const handleClose = () => {
    onClose(false);
  }


  return (
    <>
      <ModalPortal>
        <Style.BackGround onClick={handleClose} />
        <Style.Container>
          <Style.Title>{title}</Style.Title>
          <Style.Form onSubmit={handleSubmit}>
            {input ? <Style.Input type='text' placeholder={subTitle} value={value} onChange={handleInputChange} /> : <span>{subTitle}</span>}
            {button ? <Style.Button type='submit'>{buttonName}</Style.Button> : <div>sns</div>}
          </Style.Form>
          <img src={closeImg} onClick={handleClose}/>
        </Style.Container>
      </ModalPortal>
    </>
  )

}

export default Modal;