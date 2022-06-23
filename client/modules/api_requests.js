export const getUserPolls = ({ user_email, user_token }) => {
    axios.defaults.headers.get['X-User-Email'] = user_email
    axios.defaults.headers.get['X-User-Token'] = user_token

    axios.get(`http://localhost:3000/api/v1/polls.json`).then((response) => {
        console.log(response.data)
    })
}