export const getUserPolls = ({ user_email, user_token, render_polls_hook, polls_div_id }) => {
    axios.defaults.headers.get['X-User-Email'] = user_email
    axios.defaults.headers.get['X-User-Token'] = user_token

    axios.get(`http://localhost:3000/api/v1/polls.json`).then((response) => {
        console.log(response.data)
        render_polls_hook(response.data, polls_div_id)
    })
}

export const createPoll = ({ user_email, user_token, title, description, choices, authenticate }) => {
    var formdata = new FormData();
    formdata.append("user_email", user_email);
    formdata.append("user_token", user_token);
    formdata.append("poll[title]", title);
    formdata.append("poll[description]", description);
    formdata.append("poll[choices]", choices);
    formdata.append("poll[authenticate]", authenticate || false);

    async function doPostRequest(formdata) {
        let res = await axios.post(`http://localhost:3000/api/v1/polls.json`, formdata);
    
        console.log(res.data);
        console.log(res.status);

        return res.status;
    }

    return doPostRequest(formdata)
}