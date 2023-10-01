const form = document.getElementById('signin-form');

form.addEventListener('focusout', validate);

function validate(e){
    // 값의 유효성을 체크 후 문제가 있다면 printMessage 함수 호출

    const id = e.target.id;
    const value = e.target.value;
    const target = e.target;
    let result = true;

    if(!value){
        // 비어있는 값인지 체크
        printMessage(id, 'empty');
        result = false;

    }else if(id === 'email'){
        // 이메일 형식인지 체크
        const exp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

        if(exp.test(value) === false){
            printMessage(id, 'validation');
            result = false;
        }
    }

    if(!result){
        target.classList.add('error');
    }
}

function printMessage(id, type){
    // 메세지를 생성 후 messageDelivery 함수를 호출
    let message = "";

    if(type === 'empty'){
        switch(id){
            case 'email':
                message = "이메일을 입력해주세요.";
                break;
            case 'password':
                message = "비밀번호를 입력해주세요.";
                break;
        }
    }else if(type === 'validation'){
        switch(id){
            case 'email':
                message = "올바른 이메일 주소가 아닙니다.";
                break;
        }
    }

    messageDelivery(id, message);
}

function messageDelivery(id, message){
    // 메세지를 화면에 출력

    // 에러메세지가 이미 있다면 return
    const target = document.getElementById(id);
    if(target.classList.contains('error')){
        return;
    }

    // id로 메세지를 넣을 곳을 찾는다.
    const p = document.createElement('p');

    p.textContent = message;
    document.getElementById(id).parentElement.append(p);
}
