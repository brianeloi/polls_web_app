import { getPoll } from '../modules/api_requests.js'

export const votePage = ({ poll_id, logged }) => {
    const poll_div_id = 'poll_container'
    const vote_div_id = 'poll_vote'

    const render_hook = (poll, div_id) => {
        const poll_element = `<div>${poll.title} - ${poll.description}</div>`

        const polls_listener = setInterval(function () {
            const element = document.getElementById(div_id)
            if(element) {
                element.innerHTML += poll_element
                clearInterval(polls_listener)
            }
        }, 50);  // avoid infinite interval with that: sec = new Date().getTime()/1000
    }
    
    getPoll({ div_id: poll_id, render_hook })

    let poll =          `<div id="${poll_div_id}" class="${poll_div_id}">` +
                        '</div>'
    let voting_form =   `<div id="${vote_div_id}" class="${vote_div_id}">` +
                        '</div>'
    
    return poll + voting_form
}