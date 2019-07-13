import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { withNamespaces } from '../i18n'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'

import PartnerButton from '../components/micro/PartnerButton'

// import Link from 'next/link'
import LayoutGeneric from '../components/layouts/Generic'

class Contact extends React.Component {
  constructor () {
    super()
    this.state = {
      submitForm: {
        'EMAIL': '',
        'NAME': '',
        'COMPANY': '',
        'PHONE': '',
        'PROJINFO': ''
      },
      submitErrors: false,
      showThanks: false,
      submitListID: '0040deb21e' // Contact Us (Website) list on Mailchimp
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
      namespacesRequired: ['contact', 'common']
    }
  }

  render () {
    const { t } = this.props
    const currentURL = '/solutions/collection-of-devices'
    return (
      <LayoutGeneric>

        <Head>
          <title>{t('hero.header')} - {t('common:site-slogan')} with Rivetz</title>
          <meta name='description' content={t('common:site-description')} />
          <meta name='canonical' content={'https://rivetz.com' + currentURL} />

          <meta itemProp='name' content={t('hero.header') + ' ' + t('common:site-slogan') + ' with Rivetz'} />
          <meta itemProp='description' content={t('hero.details')} />
          <meta itemProp='image' content='/static/logo/250px.png' />
          <meta name='og:title' content={t('hero.header') + ' ' + t('common:site-slogan') + ' with Rivetz'} />
          <meta name='og:description' content={t('hero.details')} />
          <meta name='og:image' content='/static/logo/250px.png' />
          <meta name='og:url' content={'https://rivetz.com' + currentURL} />
          <meta name='og:site_name' content='Rivetz' />
          <meta name='og:type' content='website' />
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:title' content={t('hero.header') + ' ' + t('common:site-slogan') + ' with Rivetz'} />
          <meta name='twitter:description' content={t('hero.details')} />
          <meta name='twitter:site' content='@RivetzCorp' />
          <meta name='twitter:image:src' content='/static/logo/250px.png' />

          <link rel='stylesheet' href='/static/css/contact.css' />

        </Head>

        {/* Page Section: Hero */}
        <div className='uk-section-large page-section section-intro'>

          <div className='illustration uk-visible@l key2' data-uk-scrollspy='cls: uk-animation-slide-right-medium; repeat: true'>
            <img src='/static/img/illustrations/solutions/serviceskey2.svg' className='ill-hero' />
          </div>
          <div className='uk-container uk-container-large uk-grid-collapse' data-uk-grid>
            <div className='uk-width-1-1@xs uk-width-3-5@l'>
              <div className='section-content'>
                <div className='section-announce' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium'>
                  <h3>{t('hero.announce')}</h3>
                </div>
                <div className='section-head' >
                  <h1>{t('hero.header')}</h1>
                </div>
                <div className='section-details'>
                  <p>{t('hero.details')}</p>
                </div>
                <div className='section-buttons'>
                  <a href='mailto:sales@rivetz.com'>
                    {t('common:contact-sales')}
                  </a>
                  <PartnerButton program extraClass={'off-color'} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Section: Form */}
        <div className='uk-section-large page-section section-form'>
          <div className='uk-container-large uk-grid-collapse' data-uk-grid>
            <div className='uk-width-1-1@xs uk-width-2-5@l padTop2vh'>
              <div className='section-content' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                <div class='section-icon'>
                  <FontAwesomeIcon icon={['fas', 'comment-alt-lines']} />
                </div>
                <div class='contact-section'>
                  <h4>{t('hero.general')}</h4>
                  <p>{t('hero.general-details')} <a href='mailto:sales@rivetz.com'>sales@rivetz.com</a>.</p>
                </div>
              </div>
              <div className='section-content' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                <div class='section-icon'>
                  <FontAwesomeIcon icon={['fas', 'briefcase-medical']} />
                </div>
                <div class='contact-section'>
                  <h4>{t('hero.technical')}</h4>
                  <p>{t('hero.technical-details')} <a href='mailto:support@rivetz.com'>support@rivetz.com</a>.</p>
                </div>
              </div>
            </div>
            <div className='uk-width-1-1@xs uk-width-3-5@l'>
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
      <h1>{t('common:get-in-touch')}</h1>
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

Contact.propTypes = {
  t: PropTypes.func.isRequired
}

export default withNamespaces(['contact', 'common'])(Contact)
