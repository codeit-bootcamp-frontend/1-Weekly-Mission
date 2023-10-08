const TEST_EMAIL = 'test@codeit.com';
const TEST_PWD = 'codeit101';

const checkEmailValidation = () => {
  let email = document.getElementById('email').value;
  const regExp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

  //email이 빈 칸일 때    - error-email1
  if (!email) {
    document.getElementById('error-email1').style = 'display:block';
    document.getElementById('email').style = 'border:1px solid red';
  } else {
    document.getElementById('error-email1').style = 'display:none';
    document.getElementById('email').style = 'border: 1px solid #d3d4dd';
  }

  //유효하지 않은 email일 때    - error-email2
  if (email && !regExp.test(email)) {
    document.getElementById('error-email2').style = 'display:block';
    document.getElementById('email').style = 'border:1px solid red';
  } else {
    document.getElementById('error-email2').style = 'display:none';
    document.getElementById('email').style = 'border: 1px solid #d3d4dd';
  }
};

const checkPwdValidation = () => {
  let pwd = document.getElementById('pwd').value;

  //pwd가 빈 칸일 때      - error-pwd1
  if (!pwd) {
    document.getElementById('error-pwd1').style = 'display:block';
    document.getElementById('pwd').style = 'border:1px solid red';
  } else {
    document.getElementById('error-pwd1').style = 'display:none';
    document.getElementById('pwd').style = 'border: 1px solid #d3d4dd';
  }
};

const submit = () => {
  let email = document.getElementById('email').value;
  let pwd = document.getElementById('pwd').value;

  if (email != TEST_EMAIL || pwd != TEST_PWD) {
    document.getElementById('error-email2').style = 'display:block';
    document.getElementById('email').style = 'border:1px solid red';
    document.getElementById('error-pwd2').style = 'display:block';
    document.getElementById('pwd').style = 'border:1px solid red';
  } else {
    alert('로그인 성공');
    const link = 'folder.html';
    location.href = link;
  }
};
