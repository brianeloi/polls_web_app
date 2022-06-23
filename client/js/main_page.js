import { userPollsPage } from '../../js/user_polls_page.js'
//import { loginPage } from '../../js/login_page.js'
import { getCookiesHash } from '../modules/get_cookies_hash.js'

export const mainPage = () => {
  const cookies = getCookiesHash()
  const logged = true // cookies.user_email && cookies.user_token
  let page = ''

  if(logged) {
      page = userPollsPage()
  } else {
      page = loginPage()
  }

  $('#fullscreen').append(page)
  dispatchEvent(new Event('load'));  //  <- ??
}