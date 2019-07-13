/**
 * Layout: Generic
 *
 * PURPOSE: Basic layout for normal pages (home, about, etc) on site
 *
 * by Andrew Defee [@adefee]
 * for Rivetz, v: Etta
 * Last Updated 06.05.2019@02:10PM (1557166224)
 */
import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faEnvelope, faPaperPlane, faPhone, faExternalLinkAlt, faBookOpen, faUser, faBuilding, faBriefcaseMedical, faCommentAltLines, faTimesCircle } from '@fortawesome/pro-solid-svg-icons'
import { faTimes, faAngleRight, faAngleLeft } from '@fortawesome/pro-regular-svg-icons'
// import { fal } from '@fortawesome/pro-light-svg-icons';
import { faGithub, faDiscord, faYoutube, faTelegramPlane, faLinkedin, faMedium, faFlipboard, faFacebookF, faTwitter, faRedditAlien } from '@fortawesome/free-brands-svg-icons'

import Header from '../globals/Header'
import Footer from '../globals/Footer'
import MobileNav from '../globals/MobileNav'
import Navigation from '../globals/Navigation'
library.add(faHome, faEnvelope, faPaperPlane, faPhone, faTimes, faTimesCircle, faAngleRight, faAngleLeft, faExternalLinkAlt, faBookOpen, faUser, faBuilding, faBriefcaseMedical, faCommentAltLines, faGithub, faDiscord, faYoutube, faTelegramPlane, faLinkedin, faMedium, faFlipboard, faFacebookF, faTwitter, faRedditAlien)

class LayoutGeneric extends React.Component {
  constructor () {
    super()
    this.state = {
      newsletterAlreadySubbed: false
    }
    this.newsletterSub = this.newsletterSub.bind(this)
  }

  newsletterSub () {
    console.log('Setting global subscription.')
    this.setState({
      newsletterAlreadySubbed: true
    })
  }

  render () {
    return (
      <div>
        <Header />
        <Navigation />
        <MobileNav />
        {this.props.children}
        <Footer newsletterAlreadySubbed={this.state.newsletterAlreadySubbed} newsletterSub={this.newsletterSub} />
      </div>
    )
  }
}

export default LayoutGeneric
