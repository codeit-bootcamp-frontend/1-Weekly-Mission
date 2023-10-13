/**
 * 주어진 url과 body 내용으로 POST 요청을 보내는 함수
 */
async function post(url, content){
    try{
        const response = await fetch(`https://bootcamp-api.codeit.kr/api/${url}`, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/JSON',
            },
            body : JSON.stringify(content)
        });
        return response.status;
    }
    catch(error){
        console.log(error);
    }
}

export{ post };