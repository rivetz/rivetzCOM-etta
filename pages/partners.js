import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { Link, withNamespaces } from '../i18n'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Parser from 'html-react-parser'
import axios from 'axios'

import DeveloperToolsButton from '../components/micro/DeveloperToolsButton'

// import Link from 'next/link'
import LayoutGeneric from '../components/layouts/Generic'

class Partners extends React.Component {
  constructor () {
    super()
    this.state = {
      partners: [],
      expandPartner: false,
      expandPartnerIndex: 0,
      expandPartnerData: [],
      nextPartnerName: '',
      submitForm: {
        'EMAIL': '',
        'NAME': '',
        'COMPANY': '',
        'PHONE': '',
        'PROJINFO': ''
      },
      submitErrors: false,
      showThanks: false,
      submitListID: 'b4ad12baf0' // Contact Us (Website) list on Mailchimp
    }
    this.partnerExpand = this.partnerExpand.bind(this)
    this.partnerShrink = this.partnerShrink.bind(this)
    this.nextPartner = this.nextPartner.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  // Called from server (page refresh) & client (client nav)
  static async getInitialProps () {
    return { // Return obj
      namespacesRequired: ['partners', 'common']
    }
  }

  componentDidMount () {
    // Fetch Partners
    /* global fetch:false */
    fetch('//api.rivetz.com/partnerships')
      .then(results => {
        return results.json()
      })
      .then(partners => {
        partners.sort(function (a, b) {
          let nameA = a.name.toLowerCase(); let nameB = b.name.toLowerCase()
          if (nameA < nameB) { return -1 } // sort ascendending
          if (nameA > nameB) { return 1 }
          return 0 // default return (no sorting)
        })
        this.setState({ partners: partners })
      })
      .catch(err => console.log(err))
  }

  partnerExpand = (partner, index) => {
    console.log('Expanding info for ' + partner.name)
    this.setState({
      expandPartnerData: partner,
      expandPartner: true,
      expandPartnerIndex: index
    })
  }

  nextPartner = (modifier = 1) => {
    console.log('Current index is ' + this.state.expandPartnerIndex)
    let partnerCount = this.state.partners.length - 1
    let nextItem = (this.state.expandPartnerIndex + modifier)
    if (nextItem > partnerCount) {
      nextItem = 0
    } else if (nextItem < 0) {
      nextItem = partnerCount
    }

    console.log('Swapping to partner: ' + nextItem + ' of ' + partnerCount + ' total items.')
    this.setState({
      expandPartnerData: this.state.partners[nextItem],
      expandPartner: true,
      expandPartnerIndex: nextItem
    })
    return true
  }

  partnerShrink = () => {
    this.setState({
      expandPartner: false,
      expandPartnerData: [],
      expandPartnerIndex: 0
    })
  }

  handleInputChange (event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    let updateState = { ...this.state.submitForm }
    updateState[name] = value
    this.setState({
      submitForm: updateState
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    const submitData = this.state.submitForm
    console.log('Submitting...')

    // Show whitepaper link

    axios.post('//api.rivetz.com/subscribe/' + this.state.submitListID, submitData)
      .then(res => {
        if (res.data.success) {
          this.setState({
            showThanks: true
          })
          console.log('You successfully subscribed - thanks for getting in touch with us!')
        } else if (res.data.notice) {
          this.setState({
            showThanks: true
          })
          console.log(res.data.notice)
        }
      }).catch(err => {
        this.setState({
          submitErrors: true
        })
        console.log('Oops, we ran into an issue while subscribing you!', err)
      })
  }

  render () {
    const { t } = this.props
    const currentURL = '/solutions/collection-of-devices'
    return (
      <LayoutGeneric>

        <Head>
          <title>{t('hero.announce')} - {t('common:site-slogan')} with Rivetz</title>
          <meta name='description' content={t('common:site-description')} />
          <meta name='canonical' content={'https://rivetz.com' + currentURL} />

          <meta itemProp='name' content={t('hero.announce') + ' ' + t('common:site-slogan') + ' with Rivetz'} />
          <meta itemProp='description' content={t('hero.details')} />
          <meta itemProp='image' content='/static/logo/250px.png' />
          <meta name='og:title' content={t('hero.announce') + ' ' + t('common:site-slogan') + ' with Rivetz'} />
          <meta name='og:description' content={t('hero.details')} />
          <meta name='og:image' content='/static/logo/250px.png' />
          <meta name='og:url' content={'https://rivetz.com' + currentURL} />
          <meta name='og:site_name' content='Rivetz' />
          <meta name='og:type' content='website' />
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:title' content={t('hero.announce') + ' ' + t('common:site-slogan') + ' with Rivetz'} />
          <meta name='twitter:description' content={t('hero.details')} />
          <meta name='twitter:site' content='@RivetzCorp' />
          <meta name='twitter:image:src' content='/static/logo/250px.png' />

          <link rel='stylesheet' href='/static/css/partners.css' />

        </Head>

        {/* Page Section: Hero */}
        <div className='uk-section-large page-section section-intro'>
          <div className='uk-container uk-container-large uk-grid-collapse' data-uk-grid>
            <div className='uk-width-1-1@xs uk-width-1-2@l'>
              <div className='section-content'>
                <div className='section-announce' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium'>
                  <h3>{t('hero.announce')}</h3>
                </div>
                <div className='section-head' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium'>
                  <h1>{t('hero.header')}</h1>
                </div>
                <div className='section-details' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium'>
                  <p>{t('hero.details')}</p>
                </div>
              </div>

              <div className='section-buttons' data-uk-scrollspy='cls: uk-animation-slide-bottom; repeat: true'>
                <Link href='#partner' data-uk-scroll='offset: 100;'>
                  <a>
                    {t('hero.cta')}
                  </a>
                </Link>
                <Link href='#current'>
                  <a className='off-color' data-uk-scroll='offset: 100;'>
                    {t('hero.view')}
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className='illustration uk-visible@l app' data-uk-scrollspy='cls: uk-animation-slide-right-medium; repeat: true'>
            <img src='/static/img/illustrations/solutions/hero.svg' className='ill-hero' />
          </div>
        </div>

        {/* Page Section: Controls */}
        <div className='uk-section-large page-section section-types'>
          <div className='uk-container-large' data-uk-grid>
            <div className='uk-width-1-1@xs uk-text-center'>
              <div className='section-content' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                <div className='section-head'>
                  <h1>{t('types.header')}</h1>
                </div>
                <div className='section-details'>
                  <p>{t('types.details')}</p>
                </div>
              </div>
            </div>
            <div className='uk-width-1-1@xs uk-width-1-3@l'>
              <div className='section-content' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                <div className='section-card'>
                  <div className='section-head'>
                    <h2>{t('types.developers.title')}</h2>
                    <h3>{t('types.developers.header')}</h3>
                  </div>
                  <div className='section-details'>
                    <p>{t('types.developers.details')}</p>
                    <p>{t('types.developers.details2')}</p>
                    <div className='section-buttons' data-uk-scrollspy='cls: uk-animation-slide-bottom; repeat: true'>
                      <DeveloperToolsButton />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='uk-width-1-1@xs uk-width-1-3@l'>
              <div className='section-content' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                <div className='section-card'>
                  <div className='section-head'>
                    <h2>{t('types.policy.title')}</h2>
                    <h3>{t('types.policy.header')}</h3>
                  </div>
                  <div className='section-details'>
                    <p>{t('types.policy.details')}</p>
                  </div>
                  <div className='section-buttons' data-uk-scrollspy='cls: uk-animation-slide-bottom; repeat: true'>
                    <a href='mailto:sales@rivetz.com'>
                      {t('common:get-in-touch')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='uk-width-1-1@xs uk-width-1-3@l'>
              <div className='section-content' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                <div className='section-card'>
                  <div className='section-head'>
                    <h2>{t('types.corporate.title')}</h2>
                    <h3>{t('types.corporate.header')}</h3>
                  </div>
                  <div className='section-details'>
                    <p>{t('types.corporate.details')}</p>
                  </div>
                  <div className='section-buttons' data-uk-scrollspy='cls: uk-animation-slide-bottom; repeat: true'>
                    <a href='mailto:sales@rivetz.com'>
                      {t('common:join-the-beta')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Section: Browse Partners */}
        <div className='uk-section-large page-section section-partners'>
          <div className='uk-container-large uk-grid-collapse' data-uk-grid>
            <div className='uk-width-1-1@xs'>
              <div className='uk-width-1-1@xs uk-text-center'>
                <div className='section-content' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                  <div className='section-head'>
                    <h1 id='current'>{t('current.header')}</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className='partners-list uk-grid-small uk-child-width-1-1@xs uk-child-width-1-2@s uk-child-width-1-3@m' data-uk-scrollspy='target: > div; delay: 120; cls: uk-animation-slide-bottom-small' data-uk-grid>
              {
                this.state.partners.map((partner, index) => {
                  return (
                    <div key={index} onClick={(e) => this.partnerExpand(partner, index)}>
                      <Partner partner={partner} index={index} />
                    </div>

                  )
                })
              }
            </div>
          </div>
        </div>

        <PartnerModal visibility={this.state.expandPartner} partner={this.state.expandPartnerData} close={this.partnerShrink} nextPartner={this.nextPartner} nextPartnerName={this.state.nextPartnerName} />

        {/* Page Section: Form */}
        <div className='uk-section-large page-section section-form'>
          <div className='uk-container-large uk-grid-collapse' data-uk-grid>
            <div className='uk-width-1-1@xs'>
              <div className='section-content' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                <form onSubmit={this.handleSubmit} id='mc-embedded-subscribe-form' name='mc-embedded-subscribe-form'>
                  <ShowContactForm t={t} showThanks={this.state.showThanks} showErrors={this.state.submitErrors} handleInputChange={this.handleInputChange} />
                </form>
              </div>
            </div>
          </div>
        </div>

      </LayoutGeneric>
    )
  }
}

const ShowContactForm = ({ t, showThanks, showErrors, handleInputChange }) => {
  if (showThanks) {
    return (
      <div className='uk-grid-small uk-text-center' data-uk-grid>
        <p>Thank you! We will be in touch shortly!</p>
      </div>
    )
  }

  return (
    <div className='uk-grid-small' data-uk-grid>
      <h1 id='partner'>{t('common:partner')}</h1>
      <div className='uk-width-1-1@s uk-text-center'>
        <p>{(showErrors ? 'There was an error in your submission. Please fill out all of the fields below!' : '')}</p>
      </div>
      <div className='uk-width-1-1@xs uk-width-1-2@s'>
        <div className='uk-inline marBot'>
          <div className='uk-form-icon'><FontAwesomeIcon icon={['fas', 'user']} /></div>
          <input className='uk-input' onChange={handleInputChange} type='text' name='NAME' placeholder={t('common:name')} />
        </div>
      </div>
      <div className='uk-width-1-1@xs uk-width-1-2@s'>
        <div className='uk-inline marBot'>
          <div className='uk-form-icon'><FontAwesomeIcon icon={['fas', 'building']} /></div>
          <input className='uk-input' onChange={handleInputChange} type='text' name='COMPANY' placeholder={t('common:company')} />
        </div>
      </div>
      <div className='uk-width-1-1@xs uk-width-1-2@s'>
        <div className='uk-inline marBot'>
          <div className='uk-form-icon'><FontAwesomeIcon icon={['fas', 'envelope']} /></div>
          <input className='uk-input' onChange={handleInputChange} type='text' name='EMAIL' placeholder={t('common:email')} />
        </div>
      </div>
      <div className='uk-width-1-1@xs uk-width-1-2@s'>
        <div className='uk-inline marBot'>
          <div className='uk-form-icon'><FontAwesomeIcon icon={['fas', 'phone']} /></div>
          <input className='uk-input' onChange={handleInputChange} type='text' name='PHONE' placeholder={t('common:phone')} />
        </div>
      </div>
      <div className='uk-width-1-1@xs'>
        <textarea onChange={handleInputChange} name='PROJINFO' placeholder='Tell us more about your project needs and timeline!' />
      </div>
      <div className='uk-width-1-1@s uk-text-right'>
        <button className='submit-btn' type='submit'>
          <span><FontAwesomeIcon icon={['fas', 'paper-plane']} />{t('common:send')}</span>
        </button>
      </div>
    </div>
  )
}

const PartnerModal = ({ visibility, partner, nextPartner, close, nextPartnerName }) => {
  let partnerBlog = (blog) => {
    if (blog) {
      return (
        <a className='link-highlight partnerAnnounce' href={blog} target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={['fas', 'book-open']} />Read the Announcement&nbsp;<span />
        </a>
      )
    }
    return null
  }

  let partnerSite = (website) => {
    if (website) {
      return (
        <a className='link-highlight partnerAnnounce' href={website} target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={['fas', 'external-link-alt']} />Visit Partner Website&nbsp;<span />
        </a>
      )
    }
    return null
  }

  if (visibility) {
    return (
      <div id='partnerModal' className='uk-animation-scale-down'>
        <div className='partnerInner'>

          <div className='uk-container' data-uk-grid>
            <div className='uk-width-1-1@xs uk-width-1-3@m'>
              <div className='partnerLogo uk-animation-slide-left'>
                <img src={'/static/img/partners/' + partner.logo} alt={partner.name + ' - Rivetz Partner'} />
              </div>
              <div className='partnerLinks'>
                {
                  (partner.blog ? partnerBlog(partner.blog) : null)
                }
                {
                  (partner.website ? partnerSite(partner.website) : null)
                }
              </div>
            </div>
            <div className='uk-width-expand'>
              <div className='partnerBio'>
                <h2>About {partner.name}</h2>
                <div className='bioDesc'>{Parser(partner.bio)}</div>
              </div>
            </div>
          </div>

          <div className='navOptions'>
            <hr />
            <div onClick={(e) => nextPartner(-1)} className='navOption is-left'><FontAwesomeIcon icon={['far', 'angle-left']} /> Prev</div>
            <div onClick={(e) => close()} className='navOption is-close'><FontAwesomeIcon icon={['far', 'times']} /></div>
            <div onClick={(e) => nextPartner()} className='navOption is-right'>Next <FontAwesomeIcon icon={['far', 'angle-right']} /></div>
          </div>
        </div>
      </div>
    )
  }

  return null
}

const Partner = ({ partner, index }) => {
  if (!partner.hide) {
    return (
      <div className='partner-thumb' data-parterid={index} key={index}>
        <div className='partnerLogo'>
          <img src={'/static/img/partners/' + partner.logo} alt={partner.name + ' - Rivetz Partner'} />
        </div>
      </div>
    )
  } else {
    return null
  }
}

Partners.propTypes = {
  t: PropTypes.func.isRequired
}

export default withNamespaces(['partners', 'common'])(Partners)
