async function getResponse(){
    const code = 
    {
        email:"test@codeit.com",
        password:"sprint101"
    }
    try{const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in',{
        method:'POST',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify(code),
    });
    const result = await response.json();
    console.log(result);
    console.log(response.status);
    }
    catch{
        console.log(error.message);
    }
    finally{
        console.log('꼭');
    }
}

export {getResponse};