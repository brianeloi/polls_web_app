export const setRequestHeaders = ({ user_email, user_token }) => {
    axios.defaults.headers.get['X-User-Email'] = user_email
    axios.defaults.headers.get['X-User-Token'] = user_token
    axios.defaults.headers.post['X-User-Email'] = user_email
    axios.defaults.headers.post['X-User-Token'] = user_token
    axios.defaults.headers.put['X-User-Email'] = user_email
    axios.defaults.headers.put['X-User-Token'] = user_token
    axios.defaults.headers.delete['X-User-Email'] = user_email
    axios.defaults.headers.delete['X-User-Token'] = user_token
}