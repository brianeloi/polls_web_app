import { userPollsPage } from '../../js/user_polls_page.js'
import { votePage } from '../../js/vote_page.js'
//import { loginPage } from '../../js/login_page.js'
import { getCookiesHash } from '../modules/get_cookies_hash.js'
import { getUrlParams } from '../modules/get_url_params.js'

export const mainPage = () => {
  const cookies = getCookiesHash()
  const logged = true // cookies.user_email && cookies.user_token
  const { vote_poll } = getUrlParams('vote_poll')
  let page = ''

  if(vote_poll) {
    page = votePage({ vote_poll, logged })
  } else {
    if(logged) {
        page = userPollsPage()
    } else {
        page = loginPage()
    }
  }

  $('#fullscreen').append(page)
  dispatchEvent(new Event('load'));  //  <- ??
}