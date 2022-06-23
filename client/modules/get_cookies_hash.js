export const getCookiesHash = () => {
    const cookie = document.cookie
    
    const getCookie = (name) => {
      const value = `; ${cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    }

    return { user_email: getCookie('user_email'), user_token: getCookie('user_token') }
}
