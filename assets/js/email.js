const emailEl = document.querySelector('#email');

function emailValueChecker () {
    const regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if (emailEl.value === '') {
        return (`이메일을 입력해주세요.`);
    }
    if (!(regex.test(emailEl.value))) {
        return (`올바른 이메일 주소가 아닙니다.`)
    }
    return (false);
}

function emailCheck () {
    const emailValue = emailValueChecker();
    const emailErrorText = document.querySelector('#email-error');
    if (emailValue){
        emailEl.className = 'error';
        emailErrorText.textContent = `${emailValue}`;
        emailErrorText.style.visibility = 'visible';
    } else {
        emailEl.className = 'normal';
        emailErrorText.removeAttribute('style');
    }
}

async function emailIApiCheck (email) {
    const data = {
        email: `${email}`
    }
    const res = await fetch(`https://bootcamp-api.codeit.kr/api/check-email
    `, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    });
    return res;
}

export { emailEl, emailCheck, emailIApiCheck }