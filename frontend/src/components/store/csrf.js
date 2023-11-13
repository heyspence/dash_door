const csrfFetch = async (url, options) => {
    options.method = options.method || 'GET';
    options.headers = options.headers || {};

    if(options.method.toUperCase() !== 'GET'){
        options.headers['Content-Type'] = 
            options.headers['Content-Type'] || 'application/json';
        options.headers['X-CSRF-Token'] = sessionStorage.getItem("X-CSRF-Token");
    }

    const res = await fetch(url, options);
    if(!res.ok) throw res;
    return res;
}

export default csrfFetch;