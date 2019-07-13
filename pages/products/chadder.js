import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { withNamespaces } from '../../i18n'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'

import PartnerButton from '../../components/micro/PartnerButton'

// import Link from 'next/link'
import LayoutGeneric from '../../components/layouts/Generic'

class Confirm extends React.Component {
  constructor () {
    super()
    this.state = {
      submitForm: {
        'EMAIL': '',
        'PHONE': '',
        'PROJINFO': ''
      },
      submitErrors: false,
      showThanks: false,
      submitListID: '7452633b00'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
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

  // Called from server (page refresh) & client (client nav)
  static async getInitialProps () {
    return { // Return obj
      namespacesRequired: ['chadder', 'common']
    }
  }

  render () {
    const { t } = this.props
    const currentURL = '/products/chadder'
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

          <link rel='stylesheet' href='/static/css/chadder.css' />

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

              <div className='section-buttons'>
                <PartnerButton />
              </div>
            </div>
          </div>
          <div className='illustration uk-visible@l app' data-uk-scrollspy='cls: uk-animation-slide-right-medium; repeat: true'>
            <img src='/static/img/illustrations/chadder/hero-phone.svg' className='ill-hero' />
          </div>
          <div className='illustration uk-visible@l key1'>
            <img src='/static/img/illustrations/chadder/hero-key.svg' className='ill-hero' />
          </div>
        </div>

        {/* Page Section: Devices */}
        <div className='uk-section-large page-section section-devices'>
          <div className='uk-container-large uk-grid-collapse uk-flex uk-flex-right' data-uk-grid>
            <div className='illustration is-left is-devs phone uk-visible@l' data-uk-scrollspy='cls: uk-animation-slide-left-medium; repeat: true'>
              <img src='/static/img/illustrations/chadder/devices.svg' className='ill-hero' />
            </div>
            <div className='illustration is-left is-devs key uk-visible@l' data-uk-scrollspy='cls: uk-animation-slide-left-medium; repeat: true'>
              <img src='/static/img/illustrations/chadder/devices-key.svg' className='ill-hero' />
            </div>
            <div className='uk-width-1-1@xs uk-width-3-5@l'>
              <div className='section-content' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                <div className='section-head'>
                  <h1>{t('devices.header')}</h1>
                </div>
                <div className='section-details'>
                  <p>{t('devices.details')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Section: Powered */}
        <div className='uk-section-large page-section section-powered'>
          <div className='uk-container-large uk-grid-collapse' data-uk-grid>
            <div className='illustration uk-visible@l' data-uk-scrollspy='cls: uk-animation-slide-left-medium; repeat: true'>
              <img src='/static/img/illustrations/chadder/powered.svg' className='ill-hero' />
            </div>
            <div className='uk-width-1-1@xs uk-width-1-2@l'>
              <div className='section-content' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                <div className='section-head'>
                  <h1>{t('powered.header')}</h1>
                </div>
                <div className='section-details'>
                  <p>{t('powered.details')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

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

Confirm.propTypes = {
  t: PropTypes.func.isRequired
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
      <h1>{t('actionable.header')}</h1>
      <div className='uk-width-1-1@s uk-text-center details'>
        <p>{t('actionable.details')}</p>
      </div>
      <div className='uk-width-1-1@s uk-text-center'>
        <p>{(showErrors ? 'There was an error in your submission. Please fill out all of the fields below!' : '')}</p>
      </div>
      <div className='uk-width-1-1@xs uk-width-3-5@s'>
        <div className='uk-inline marBot'>
          <div className='uk-form-icon'><FontAwesomeIcon icon={['fas', 'envelope']} /></div>
          <input className='uk-input' onChange={handleInputChange} type='text' name='EMAIL' placeholder={t('common:email')} />
        </div>
      </div>
      <div className='uk-width-1-1@xs uk-width-2-5@s'>
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

export default withNamespaces(['chadder', 'common'])(Confirm)
