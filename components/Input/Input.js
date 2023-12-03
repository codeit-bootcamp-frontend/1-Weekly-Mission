import { useState } from "react";
import * as Styled from './input.style.js';
import CloseEye from '@/src/assets/eye-off';


export default function LoginInput ({label}) {
  const [active, setActive] = useState(false)

  const handleInputFocus = () => {
    setActive(true);
  }

  

  return (
    <>
      <div>
        <label htmlFor="">{label}</label>
        <Styled.Input id="" active={active} onFocus={handleInputFocus} placeholder="내용 입력"></Styled.Input>
        {label !== '이메일' && <CloseEye />}
      </div>
      

    </>
  )
}