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
    // console.log(result.data.accessToken);
    // console.log(response.status);
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
    // console.log(result.data.accessToken);
    // console.log(response.status);
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
    // console.log(result.data.accessToken);
    // console.log(response.status);
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