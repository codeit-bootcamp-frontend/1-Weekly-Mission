const apiUrl = "https://bootcamp-api.codeit.kr/api";

interface Body {
    [keys: string]: Array<Object>;
}

async function getApi(path: string) {
    const res = await fetch(`${apiUrl}${path}`);
    if (!res.ok) {
        throw new Error(`${res.status} error`);
    }
    const body: Body = await res.json();
    return body;
}

export default getApi;
