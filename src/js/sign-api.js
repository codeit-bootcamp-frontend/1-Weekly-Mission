//signin 페이지에서 이메일 비밀번호 일치하는지 확인
async function getSigninResponse(email,password){
    const code = 
    {
        email:`${email}`,
        password:`${password}`
    }
    try{const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in',{
        method:'POST',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify(code),
    });
    const result = await response.json();
    const apiStatus = response.status;
    const token = await result.data.accessToken;
    return  [apiStatus,token];
    }
    catch(error){
        console.log(error.message);
        return [error.message];
    }
    finally{
        console.log('꼭');
    }
}

//signup 페이지에서 유효한 이메일 비밀번호인지 확인
async function getSignupResponse(email,password){
    const code = 
    {
        email:`${email}`,
        password:`${password}`,
    }
    try{const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-up',{
        method:'POST',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify(code),
    });
    const result = await response.json();
    const apiStatus = response.status;
    const token = await result.data.accessToken;
    return  [apiStatus,token];
    }
    catch(error){
        console.log(error.message);
        return [error.message];
    }
    finally{
        console.log('꼭');
    }
}

//signup 페이지에서 email 중복인지 확인
async function getSignupExistEmail(email){
    const code = 
    {
        email:`${email}`,
    }
    try{const response = await fetch('https://bootcamp-api.codeit.kr/api/check-email',{
        method:'POST',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify(code),
    });
    const result = await response.json();
    const apiStatus = response.status;
    return apiStatus ;
    }
    catch(error){
        console.log(error.message);
        return [error.message];
    }
    finally{
        console.log('꼭');
    }
}

export {getSigninResponse, getSignupResponse, getSignupExistEmail};