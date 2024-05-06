export function formatVideoTime(durationInSeconds: number) {
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    const seconds = Math.floor(durationInSeconds % 60);
    const formattedTime =
        (hours > 0 ? hours + ':' : '') +
        String(minutes).padStart(2, '0') +
        ':' +
        String(seconds).padStart(2, '0');

    return formattedTime;
}