export const getUrlParams = (keys = []) => {
    const url_search = window.location.search //'?caruru=vatapa'
    const url_params = new URLSearchParams(url_search)
    let params_hash = {}

    keys.forEach(key => {
        params_hash[key] = url_params.get(key) // => 'vatapa'
    });

    return params_hash
}