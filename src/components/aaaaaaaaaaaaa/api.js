async function getFolder () {
    const res = await fetch('https://bootcamp-api.codeit.kr/api/sample/folder');
    if(!res.ok) {
        throw new Error(`${res.status} error`)
    }
    const body = await res.json();
    return body;
}

async function getUser () {
    const res = await fetch('https://bootcamp-api.codeit.kr/api/sample/user');
    if(!res.ok) {
        throw new Error(`${res.status} error`)
    }
    const body = await res.json();
    return body;
}

async function test () {
    const result = await getUser();
    const {id, name, email} = result;
    console.log(id, name, email);
}

test();

export { getFolder, getUser }