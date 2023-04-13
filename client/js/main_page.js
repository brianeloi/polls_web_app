import { userPollsPage } from '../../js/user_polls_page.js'
import { votePage } from '../../js/vote_page.js'
//import { loginPage } from '../../js/login_page.js'
import { getCookiesHash, makeCookie } from '../modules/cookies_operations.js'
import { getUrlParams } from '../modules/get_url_params.js'
import { setRequestHeaders } from '../modules/set_request_headers.js'

export const mainPage = () => {
  if (!document.cookie.includes('user_email')) makeCookie({ key: 'user_email', value: 'usermail@mail.com' })
  if (!document.cookie.includes('user_token')) makeCookie({ key: 'user_token', value: 'YVBNcNLSpReeudbvri8B' })
  //Remove lines above after create login page with full login features

  const { user_email, user_token } = getCookiesHash(['user_email', 'user_token'])
  setRequestHeaders({ user_email, user_token })
  const logged = user_email && user_token
  let page = ''

  const { poll_id } = getUrlParams(['poll_id'])
  if (poll_id) {
    page = votePage({ poll_id, logged })
  } else {
    if (logged) {
      console.log('logadoo')
      page = userPollsPage()
    } else {
      page = loginPage()
    }
  }

  $('#fullscreen').append(page)
  dispatchEvent(new Event('load'));  //  <- ??
}
