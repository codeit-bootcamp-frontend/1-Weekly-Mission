export default function dateCalculator(apiDate: Date) {
    const myDate = new Date();
    const elapsedMinute = Math.floor(
        (myDate.valueOf() - apiDate.valueOf()) / 1000 / 60
    );
    const elapsedHour = Math.floor(
        (myDate.valueOf() - apiDate.valueOf()) / 1000 / 60 / 60
    );
    const elapsedDays = Math.floor(
        (myDate.valueOf() - apiDate.valueOf()) / 1000 / 60 / 60 / 24
    );
    const elapsedMonth = Math.floor(
        (myDate.valueOf() - apiDate.valueOf()) / 1000 / 60 / 60 / 24 / 31
    );
    const elapsedYear = Math.floor(
        (myDate.valueOf() - apiDate.valueOf()) / 1000 / 60 / 60 / 24 / 31 / 12
    );

    if (elapsedMinute < 60) {
        if (elapsedMinute < 2) {
            return `1 minute ago`;
        }
        return `${elapsedMinute} minute${elapsedMinute ? "s" : ""} ago`;
    }
    if (elapsedHour < 24) {
        return `${elapsedHour} hour${elapsedHour ? "s" : ""} ago`;
    }
    if (elapsedDays < 31) {
        return `${elapsedDays} day${elapsedDays ? "s" : ""} ago`;
    }
    if (elapsedMonth < 12) {
        return `${elapsedMonth} month${elapsedMonth ? "s" : ""} ago`;
    }
    if (elapsedYear) {
        return `${elapsedYear} year${elapsedYear ? "s" : ""} ago`;
    }
}
