import { notifyMsg } from './valiable.js';


const errMsg = {
  emptyEmail : '이메일을 입력해주세요.',
  shapeEmail : '올바른 이메일 주소가 아닙니다.',
  userEmail : '이미 사용중인 이메일입니다.',
  emptyPassword : '비밀번호를 입력해주세요.',
  checkEmail : '이메일을 확인해주세요.',
  checkPassword : '비밀번호를 확인해주세요.',
}

function makeMsg(et, err){
  notifyMsg.classList.add('notify');
  notifyMsg.textContent = errMsg[err];
  et.className = 'inputEvent';
  et.after(notifyMsg);
}

export default errMsg ;