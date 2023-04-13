export const getCookiesHash = (keys = []) => {
    const cookie = document.cookie
    let cookies_hash = {}
    
    const getCookie = (name) => {
      const value = `; ${cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    }
    
    keys.forEach(key => {
      cookies_hash[key] = getCookie(key)
    });

    return cookies_hash
}



export const makeCookie = (params = {}) => {
  document.cookie = params.key + "=" + params.value + "; path=/";
}
