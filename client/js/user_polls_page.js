import { getUserPolls } from '../modules/api_requests.js'
import { addPollForm } from '../js/add_poll_form.js'

export const userPollsPage = () => {
    const polls_div_id = 'polls_container'

    const render_polls_hook = (polls, div_id) => {
        let polls_html_list = ''

        polls.forEach(poll => {
            polls_html_list += `<div>${poll.title} - ${poll.description}</div>`
        });

        const polls_listener = setInterval(function () {
            const element = document.getElementById(div_id)
            if(element) {
                element.innerHTML += polls_html_list
                clearInterval(polls_listener)
            }
        }, 50);  // avoid infinite interval with that: sec = new Date().getTime()/1000
    }

    const polls = getUserPolls({ user_email,
                                 user_token,
                                 render_polls_hook,
                                 polls_div_id })

    let add_poll_form = addPollForm({ user_email, user_token })
    let polls_list =    `<div id="${polls_div_id}" class="${polls_div_id}">` +
                        '</div>'

    return add_poll_form + polls_list
}
