const apiUrl = 'https://bootcamp-api.codeit.kr/api';

async function getFolder () {
    const res = await fetch(`${apiUrl}/sample/folder`);
    if(!res.ok) {
        throw new Error(`${res.status} error`)
    }
    const body = await res.json();
    return body;
}

async function getUser () {
    const res = await fetch(`${apiUrl}/sample/user`);
    if(!res.ok) {
        throw new Error(`${res.status} error`)
    }
    const body = await res.json();
    return body;
}

export { getFolder, getUser }