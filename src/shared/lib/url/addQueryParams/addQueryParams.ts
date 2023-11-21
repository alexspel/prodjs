export function getQueryParams(params: OptionalRecord<string, string>) {
    const search = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([name, value]) => {
        if (value !== undefined && value !== null) {
            search.set(name, value);
        }
    });
    return `?${search.toString()}`;
}

/**
 * Функция добавления параметров строки запроса в URL
 * @param params
 */
export function addQueryParams(params: OptionalRecord<string, string>) {
    window.history.pushState(null, '', getQueryParams(params));
}
