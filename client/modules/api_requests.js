export const getUserPolls = ({ user_email, user_token, render_polls_hook, polls_div_id }) => {
    axios.defaults.headers.get['X-User-Email'] = user_email
    axios.defaults.headers.get['X-User-Token'] = user_token

    async function doGetRequest() {
        let res = await axios.get(`http://localhost:3000/api/v1/polls.json`)

        console.log(res.data)
        render_polls_hook(res.data, polls_div_id)

        return res.data
    }
    
    return doGetRequest()
}

export const getPoll = ({ user_email, user_token, poll_id, render_hook, div_id }) => {
    axios.defaults.headers.get['X-User-Email'] = user_email
    axios.defaults.headers.get['X-User-Token'] = user_token

    async function doGetRequest() {
        let res = await axios.get(`http://localhost:3000/api/v1/polls/${poll_id}`)

        console.log(res.data)
        render_hook(res.data, div_id)

        return res.data
    }
    
    return doGetRequest()
}

export const createPoll = ({ user_email, user_token, title, description, choices, authenticate }) => {
    axios.defaults.headers.post['X-User-Email'] = user_email
    axios.defaults.headers.post['X-User-Token'] = user_token
    
    var formdata = new FormData();
    formdata.append("poll[title]", title);
    formdata.append("poll[description]", description);
    formdata.append("poll[choices]", choices);
    formdata.append("poll[authenticate]", authenticate || false);

    async function doPostRequest() {
        let res = await axios.post(`http://localhost:3000/api/v1/polls.json`, formdata);
    
        console.log(res.data);
        return res.data;
    }

    return doPostRequest()
}