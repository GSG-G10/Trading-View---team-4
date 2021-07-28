const timeFetch = () => {
    const basicUrl = 'https://worldtimeapi.org/api/timezone/';
    const urls = ['Europe/London', 'Asia/Jerusalem', 'Europe/Moscow'];
    for (let i = 0; i < urls.length; i++)
        fetchFromURL(basicUrl + urls[i], extractTime);
};

const extractTime = (data) => {
    const city = data['timezone'].split('/')[1];
    const timeText = data['datetime'].split(':');
    const hours = timeText[0].substring(timeText[0].length - 2) - 0;
    const mins = timeText[1] - 0;
    const secs = timeText[2].substring(0, 2) - 0;
    const milliSecs = timeText[2].substring(3, 6) - 0;

    showTime(hours, mins, secs, city);

    setTimeout(() => updateTime(hours, mins, secs, city), 1000 - milliSecs);

};

const updateTime = (hours, mins, secs, city) => {
    secs = secs === 59 ? 0 : secs + 1;
    mins = secs !== 0 ? mins : mins === 59 ? 0 : mins + 1;
    hours = mins !== 0 || secs !== 0 ? hours : hours === 23 ? 0 : hours + 1;
    showTime(hours, mins, secs, city);

    setTimeout(() => updateTime(hours, mins, secs, city), 1000);
};

timeFetch();

function showTime(hours, mins, secs, city) {
    const clock = document.querySelector(`.clock-${city}`);
    clock.innerText = `${hours < 10 ? '0' + hours : hours}: ${ mins < 10 ? '0' + mins : mins }: ${ secs < 10 ? '0' + secs : secs }`;
}