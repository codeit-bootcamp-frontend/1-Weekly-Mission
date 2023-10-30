export const isLocation = () => {
    let location = window.location.pathname;
    if(location.indexOf('folder') > -1) {
        return true;
    } else {
        return false;
    }
}