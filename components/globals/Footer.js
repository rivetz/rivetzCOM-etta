import React from 'react'
import PropTypes from 'prop-types'
import { withNamespaces } from '../../i18n'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link' // eslint-disable-line
import axios from 'axios'
import SocialNav from './SocialNav'

class Footer extends React.Component {
  constructor () {
    super()
    this.state = {
      newsletterEmail: '',
      newsletterName: '',
      newsletterConsent: false,
      newsletterSubmitted: false,
      newsletterSubmitSuccess: null,
      newsletterSubmitError: null
    }
    this.newsletterSubscribe = this.newsletterSubscribe.bind(this)
    this.updateName = this.updateName.bind(this)
    this.updateEmail = this.updateEmail.bind(this)
    this.updateConsent = this.updateConsent.bind(this)
  }

  static async getInitialProps () {
    return { // Return obj
      namespacesRequired: ['common']
    }
  }

  updateEmail (e) { // Update newsletter email
    this.setState({ newsletterEmail: e.target.value })
  }

  updateName (e) { // Update newsletter name
    this.setState({ newsletterName: e.target.value })
  }

  updateConsent () { // Update newsletter consent status
    this.setState({
      newsletterConsent: !this.state.newsletterConsent
    })
  }

  newsletterSubscribe () {
    const { t } = this.props

    if (!this.props.newsletterAlreadySubbed) {
      if (this.state.newsletterConsent && this.state.newsletterEmail.length > 0 && this.state.newsletterEmail.includes('@') && this.state.newsletterEmail.includes('.')) {
        // Submit
        this.setState({ newsletterSubmitted: true })
        this.setState({ newsletterSubmitError: null }) // Reset errors.

        let fname = ''

        let lname = ''

        let nameFull = this.state.newsletterName.trim()

        // Determine if name is included. If has space, separate into last name
        if (nameFull.length > 0 && nameFull.includes(' ')) {
          let nameSplit = nameFull.split(' ')
          fname = nameSplit[0].charAt(0).toUpperCase() + nameSplit[0].slice(1)
          lname = nameSplit[1].charAt(0).toUpperCase() + nameSplit[1].slice(1)
        } else if (this.state.newsletterName.length > 0) {
          fname = nameFull.charAt(0).toUpperCase() + nameFull.slice(1)
        }

        const submitData = {
          'EMAIL': this.state.newsletterEmail,
          'FNAME': fname,
          'LNAME': lname,
          'COMPANY': '',
          'gdpr[1481]': this.state.newsletterConsent // Email permission
        }

        axios.post('//api.rivetz.com/subscribe/886dfb345f', submitData)
          .then(res => {
            if (res.data.success) {
              this.props.newsletterSub()
              this.setState({ newsletterSubmitSuccess: t('newsletter.success') })
              console.log(t('newsletter.success'))
            } else if (res.data.notice) {
              this.setState({ newsletterSubmitError: res.data.notice })
              console.log('Notice: ' + res.data.notice)
            }
            this.setState({ newsletterSubmitted: false })
          }).catch(err => {
            console.log('Submission Failed: ' + t('newsletter.fail'), err)
            this.setState({ newsletterSubmitError: t('newsletter.fail') })
            this.setState({ newsletterSubmitted: false })
          })
      } else {
        this.setState({ newsletterSubmitError: t('newsletter.requirements') })
      }
    } else {
      this.setState({ newsletterSubmitError: t('newsletter.success') })
    }

    return false
  }

  render () {
    const { t } = this.props
    return (
      <div>
        <footer className='footer' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium'>
          <div className='uk-container-fluid uk-grid-collapse' data-uk-grid>
            <div className='uk-width-1-1@xs uk-width-2-5@l newsletter' data-uk-scrollspy='cls: uk-animation-slide-left-medium'>
              <h4>{t('newsletter.header')}</h4>
              <NewsletterError error={this.state.newsletterSubmitError} />
              <div className='newsletter-email'>
                <div className='uk-inline marBot'>
                  <div className='uk-form-icon' data-uk-icon='icon: user' />
                  <input className='uk-input' placeholder={t('newsletter.name')} onChange={this.updateName} value={this.state.newsletterName} />
                </div>
                <div className='uk-inline'>
                  <div className='uk-form-icon' data-uk-icon='icon: mail' />
                  <input className='uk-input' placeholder={t('newsletter.email')} onChange={this.updateEmail} value={this.state.newsletterEmail} />
                </div>
              </div>
              <div className='newsletter-consent'>
                <div className='uk-margin'>
                  <label>
                    <span>{t('newsletter.subscribe')}</span>
                    <div className='inputCont'>
                      <input className='uk-checkbox' id='newsletter-email' onChange={this.updateConsent} value={this.state.newsletterConsent} type='checkbox' />
                    </div>
                  </label>
                </div>
              </div>
              <div className='newsletter-submit'>
                <div id='newsletter-submit' onClick={this.newsletterSubscribe}>{t('newsletter.button')}</div>
              </div>
              <NewsletterLoading isVisible={this.state.newsletterSubmitted} loading={t('newsletter.loading')} success={this.state.newsletterSubmitSuccess} />
            </div>
            <div className='uk-width-1-1@xs uk-width-3-5@l footerContent'>
              <SocialNav />

              <div className='uk-container-fluid' data-uk-grid>
                <div className='uk-width-1-2 uk-width-1-4@m' data-uk-scrollspy='target: > ul li; delay: 200; cls: uk-animation-slide-left-small'>
                  <h5>{t('top.products')}</h5>
                  <ul className='footerNav'>
                    <li>
                      <Link href='/products/assured-wallet'>
                        <a onClick={this.props.clickOffMenu}><span>{t('p.wallet').replace(/Rivetz /g, '')}</span></a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/products/authenticator'>
                        <a onClick={this.props.clickOffMenu}><span>{t('p.authenticator').replace(/Rivetz /g, '')}</span></a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/products/rivet'>
                        <a onClick={this.props.clickOffMenu}><span>{t('p.rivet')}</span></a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/products/chat'>
                        <a onClick={this.props.clickOffMenu}><span>Chadder</span></a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/products/confirm'>
                        <a onClick={this.props.clickOffMenu}><span>{t('p.confirm')}</span></a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/products/jarz'>
                        <a onClick={this.props.clickOffMenu}><span>{t('p.jarz')}</span></a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='uk-width-1-2 uk-width-1-4@m' data-uk-scrollspy='target: > ul li; delay: 200; cls: uk-animation-slide-left-small'>
                  <Link href='/solutions'>
                    <a onClick={this.props.clickOffMenu}><h5>{t('top.solutions')}</h5></a>
                  </Link>
                  <ul className='footerNav'>
                    <li>
                      <Link href='/solutions/policy-engine'>
                        <a onClick={this.props.clickOffMenu}><span>{t('s.policy').replace(/Rivetz /g, '')}</span></a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/solutions/collection-of-devices'>
                        <a onClick={this.props.clickOffMenu}><span>{t('s.collection').replace(/Rivetz /g, '')}</span></a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/solutions/enterprise-authentication'>
                        <a onClick={this.props.clickOffMenu}><span>{t('s.auth')}</span></a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/solutions/dual-roots-of-trust'>
                        <a onClick={this.props.clickOffMenu}><span>{t('s.drt')}</span></a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/solutions/professional-services'>
                        <a onClick={this.props.clickOffMenu}><span>{t('s.services')}</span></a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='uk-width-1-2 uk-width-1-4@m' data-uk-scrollspy='target: > ul li; delay: 200; cls: uk-animation-slide-left-small'>
                  <div className=''>
                    <Link href='/community'>
                      <a onClick={this.props.clickOffMenu}><h5 className='community'>{t('top.community')}</h5></a>
                    </Link>
                  </div>
                  <h5>{t('top.developers')}</h5>
                  <ul className='footerNav'>
                    <li>
                      <a href='https://developer.rivetz.com/docs/v1.0/overview/?ref=comfoot' target='_blank' rel='noreferrer'><span>{t('d.start-overview').replace(/Rivetz /g, '')}</span></a>
                    </li>
                    {/* <li>
                      <Link href='/developers/quick-wallet' onClick={this.props.clickOffMenu}>
                        <a><span>{t('d.quick-wallet').replace(/Rivetz /g,'')}</span></a>
                      </Link>
                    </li> */}
                    <li>
                      <a href='https://developer.rivetz.com/?ref=comfoot' target='_blank' rel='noreferrer'><span>{t('d.start-full')}</span></a>
                    </li>
                    <li>
                      <a href='https://discourse.rivetz.com/?ref=comfoot' target='_blank' rel='noreferrer'><span>{t('d.community')}</span></a>
                    </li>
                  </ul>
                </div>
                <div className='uk-width-1-2 uk-width-1-4@m' data-uk-scrollspy='target: > ul li; delay: 200; cls: uk-animation-slide-left-small'>
                  <h5>{t('top.company')}</h5>
                  <ul className='footerNav'>
                    {/* <li>
                      <Link href='/company/mission' onClick={this.props.clickOffMenu}>
                        <a><span>{t('co.mission').replace(/Rivetz /g,'')}</span></a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/company/history' onClick={this.props.clickOffMenu}>
                        <a><span>{t('co.history').replace(/Rivetz /g,'')}</span></a>
                      </Link>
                    </li> */}
                    <li>
                      <Link href='partners'>
                        <a onClick={this.props.clickOffMenu}><span>{t('co.partner')}</span></a>
                      </Link>
                    </li>
                    <li>
                      <Link href='team'>
                        <a onClick={this.props.clickOffMenu}><span>{t('co.team')}</span></a>
                      </Link>
                    </li>
                    <li>
                      <Link href='careers'>
                        <a onClick={this.props.clickOffMenu}><span>{t('co.careers')}</span></a>
                      </Link>
                    </li>
                    <li>
                      <Link href='contact'>
                        <a onClick={this.props.clickOffMenu}><span>{t('co.contact')}</span></a>
                      </Link>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>

          <div className='copyright'>
            <p>&copy; 2019&nbsp;
              <a href='https://rivetz.com' className='link-underline' rel='noopener noreferrer' target='_blank'>Rivetz Corp</a>. {t('copyright')}
            </p>
          </div>
        </footer>
        {/* eslint-disable */}
        <script src='/static/js/vendor/uikit/uikit.min.js'></script>
        <script src='/static/js/vendor/uikit/uikit-icons.min.js'></script>
        <script src="https://kit.fontawesome.com/font-awesome-kitid.js"></script>
        <script src="/static/js/vendor/axios/axios.min.js"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=ga-id"></script>
        <script src='/static/js/ga.js'></script>
        {/* eslint-enable */}
      </div>
    )
  }
}

class NewsletterLoading extends React.Component {
  render () {
    if (this.props.isVisible || this.props.success) {
      if (this.props.success) {
        return (
          <div className='newsletter-success'>
            <div className='success-msg'>
              <FontAwesomeIcon icon={['fal', 'check']} /> {this.props.success}
            </div>

          </div>
        )
      } else {
        return (
          <div className='newsletter-loading'>
            <span>{this.props.loading}</span>
          </div>
        )
      }
    } else {
      return null
    }
  }
}

class NewsletterError extends React.Component {
  render () {
    if (this.props.error) {
      return (
        <div className='newsletter-error'>
          <span>{this.props.error}</span>
        </div>
      )
    } else {
      return null
    }
  }
}

Footer.propTypes = {
  t: PropTypes.func.isRequired
}

export default withNamespaces(['common'])(Footer)
