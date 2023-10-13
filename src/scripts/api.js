/**
 * 로그인 시, server에 POST 요청을 하는 함수
 */
async function post(email, password){
    const member = { email, password };
    try{
        const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/JSON',
            },
            body : JSON.stringify(member)
        });
        return response.status;
    }
    catch(error){
        console.log(error);
    }
}

export{ post };