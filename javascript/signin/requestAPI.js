import { CHECK_PASSWORD, CHECK_EMAIL } from '../errorConstants.js';
import  makeMessage  from '../makeMessage.js'
import { emailInput, passwordInput } from '../variables.js';


export async function requestapi(member){
  const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
    method : "POST",
    headers : {
      "content-Type" : "application/json",
    },
    body : JSON.stringify(member),
  });

  const result = await response.json();

  if (response.status === 200){
    location.href = '/index.html'
  } else if (response.status === 400) {
    makeMessage(emailInput, CHECK_EMAIL);
    makeMessage(passwordInput, CHECK_PASSWORD);
  }
}
