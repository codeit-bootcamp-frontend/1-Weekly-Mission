export const isLocation = () => {
    const location = window.location.pathname;
    if(location.indexOf('folder') > -1) {
        return true;
    } else {
        return false;
    }
}