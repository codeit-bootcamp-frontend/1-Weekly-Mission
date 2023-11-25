const apiUrl = "https://bootcamp-api.codeit.kr/api";

async function getApi(path: string) {
    const res = await fetch(`${apiUrl}${path}`);
    if (!res.ok) {
        throw new Error(`${res.status} error`);
    }
    const body: object = await res.json();
    console.log(body);
    return body;
}

export default getApi;
