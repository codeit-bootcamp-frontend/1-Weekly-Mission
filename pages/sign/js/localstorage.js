export function saveItem(key, value) {
    window.localStorage.setItem(key, value);
}

export function getItem(key) {
    return window.localStorage.getItem(key);
}
