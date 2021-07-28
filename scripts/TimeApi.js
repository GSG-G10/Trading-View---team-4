const timeFetch = () => {
    const basicUrl = 'https://timezoneapi.io/api/timezone/?token=afzVJRxSmzsnSXBVRmLJ&timezone=';
    const urls = ['Europe/London', 'Asia/Jerusalem', 'Europe/Moscow'];
    for (let i = 0; i < urls.length; i++)
        fetchFromURL(basicUrl + urls[i], extractTime);
};

const extractTime = (data) => {
    const city = data['data']['timezone']['id'].split('/')[1];
    const timeText = data['data']['datetime']['time'].split(':');
    const hours = timeText[0] - 0;
    const mins = timeText[1] - 0;
    const secs = timeText[2] - 0;

    showTime(hours, mins, secs, city);

    setTimeout(() => updateTime(hours, mins, secs, city), 1000);

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