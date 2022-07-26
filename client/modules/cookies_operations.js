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

export const makeCookie = (/* { key: "foo", value: "bar" }, { ... } */) => {
  for (var i = 0; i < arguments.length; i++) {
    document.cookie = arguments[i].key + "=" + arguments[i].value + "; path=/";
  }
}
