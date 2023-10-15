import { emailInput , passwordInput} from "../variables.js";
import { requestapi } from "./requestAPI.js";

function login(e){
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;

  if (email && password){
    const member = {
      email : emailInput.value,
      password : passwordInput.value,
    }
    requestapi(member);
  }
};

function loginEnter(e){
  if ( e.key === 'Enter'){
    login(e)
  } 
};

export { login, loginEnter };
