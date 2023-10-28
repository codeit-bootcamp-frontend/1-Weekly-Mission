const apiUrl = 'https://bootcamp-api.codeit.kr/api';

async function getApi (path) {
    const res = await fetch(`${apiUrl}${path}`);
    if(!res.ok) {
        throw new Error(`${res.status} error`)
    }
    const body = await res.json();
    return body;
}

export default getApi;