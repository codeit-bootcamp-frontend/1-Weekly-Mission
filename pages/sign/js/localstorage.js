function saveItem(key, value) {
    window.localStorage.setItem(key, value);
}

function getItem(key) {
    return window.localStorage.getItem(key);
}

function removeItem(key) {
    window.localStorage.removeItem(key);
}

export default {saveItem, getItem, removeItem};
