const errorMessages = {
    empty : {
        email : '이메일을 입력해주세요.',
        password : '비밀번호를 입력해주세요.',
        passwordCheck : '비밀번호를 한 번 더 입력해주세요.',
    },
    validation : {
        email : '올바른 이메일 주소가 아닙니다.',
        password : '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
    },
    login : {
        email : '이메일을 확인해주세요.',
        password : '비밀번호를 확인해주세요.',
    },
    coincidence : {
        passwordCheck : '비밀번호가 일치하지 않아요.',
    },
    duplicate : {
        email : '이미 사용 중인 이메일입니다.',
    }
};

export { errorMessages };