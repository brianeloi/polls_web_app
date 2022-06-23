import { getUserPolls } from '../modules/api_requests.js'

export const userPollsPage = () => {
    const polls = getUserPolls({ user_email: 'usermail@mail.com', user_token: 'YVBNcNLSpReeudbvri8B' })
    //console.log(polls)

    let polls_list =    '<header id="header" class="header">' + 
                            '<div id=header_text class="header_text">' +
                                'Polls' +
                            '</div>' +
                        '</header>'

    return polls_list
}
