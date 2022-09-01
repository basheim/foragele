export const SECOND_IN_MS = 1000;
export const MINUTE_IN_MS = SECOND_IN_MS * 60;

export const getStringTime = (timeinMs: number): string => {
    const minutes = Math.floor(timeinMs / MINUTE_IN_MS);
    const seconds = Math.floor((timeinMs % MINUTE_IN_MS) / SECOND_IN_MS).toLocaleString(undefined, {minimumIntegerDigits : 2});
    return `${minutes}:${seconds}`;
}