import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { withNamespaces } from '../../i18n'

import PartnerButton from '../../components/micro/PartnerButton'

// import Link from 'next/link'
import LayoutGeneric from '../../components/layouts/Generic'

class EntAuth extends React.Component {
  constructor () {
    super()
    this.state = {

    }
  }

  // Called from server (page refresh) & client (client nav)
  static async getInitialProps () {
    return { // Return obj
      namespacesRequired: ['enterprise-authentication', 'common']
    }
  }

  render () {
    const { t } = this.props
    const currentURL = '/solutions/enterprise-authentication'
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

          <link rel='stylesheet' href='/static/css/enterprise-authentication.css' />

        </Head>

        {/* Page Section: Hero */}
        <div className='uk-section-large page-section section-intro'>
          <div className='illustration uk-visible@l app' data-uk-scrollspy='cls: uk-animation-slide-right-medium; repeat: true'>
            <img src='/static/img/illustrations/solutions/authentication.svg' className='ill-hero' />
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
                  <PartnerButton />
                  <a href='https://api.rivetz.com/pdf/auth_graphic_report.pdf' target='_blank' rel='noreferrer' className='off-color'>
                      2FA Study
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Section: Winning */}
        <div className='uk-section-large page-section section-winning'>
          <div className='illustration uk-visible@l is-devs is-left user' data-uk-scrollspy='cls: uk-animation-slide-right-medium; repeat: true'>
            <img src='/static/img/illustrations/authenticator/user.svg' className='ill-hero' />
          </div>
          <div className='uk-container-large uk-flex uk-flex-right' data-uk-grid>
            <div className='uk-width-1-1@xs uk-width-3-5@l'>
              <div className='section-content' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                <div className='section-head'>
                  <h1>{t('enrollment.header')}</h1>
                </div>
                <div className='section-details'>
                  <p>{t('enrollment.details')}</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Page Section: Developers */}
        <div className='uk-section-large page-section section-transparency'>
          <div className='uk-container-large uk-grid-collapse' data-uk-grid>
            <div className='illustration uk-visible@l' data-uk-scrollspy='cls: uk-animation-slide-left-medium; repeat: true'>
              <img src='/static/img/illustrations/rivet/safe.svg' className='ill-hero' />
            </div>
            <div className='uk-width-1-1@xs uk-width-1-2@l'>
              <div className='section-content' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                <div className='section-head'>
                  <h1>{t('transparency.header')}</h1>
                </div>
                <div className='section-details'>
                  <p>{t('transparency.details')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Section: Device */}
        <div className='uk-section-large page-section section-device'>
          <div className='illustration uk-visible@l is-devs is-left device' data-uk-scrollspy='cls: uk-animation-slide-right-medium; repeat: true'>
            <img src='/static/img/illustrations/solutions/collections-plain.svg' className='ill-hero' />
          </div>
          <div className='uk-container-large uk-flex uk-flex-right' data-uk-grid>
            <div className='uk-width-1-1@xs uk-width-3-5@l'>
              <div className='section-content' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                <div className='section-head'>
                  <h1>{t('device.header')}</h1>
                </div>
                <div className='section-details'>
                  <p>{t('device.details')}</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Page Section: Transition */}
        <div className='uk-section-large page-section section-transparency'>
          <div className='uk-container-large uk-grid-collapse' data-uk-grid>
            <div className='illustration uk-visible@l device' data-uk-scrollspy='cls: uk-animation-slide-left-medium; repeat: true'>
              <img src='/static/img/illustrations/authenticator/policies-phone.svg' className='ill-hero' />
            </div>
            <div className='uk-width-1-1@xs uk-width-1-2@l'>
              <div className='section-content' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                <div className='section-head'>
                  <h1>{t('transition.header')}</h1>
                </div>
                <div className='section-details'>
                  <p>{t('transition.details')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Section: Partner */}
        <div className='uk-section-large page-section section-winning'>
          <div className='uk-container-large' data-uk-grid>
            <div className='uk-width-1-1@xs uk-text-center'>
              <div className='section-content' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                <div className='section-head'>
                  <h1>{t('partner.header')}</h1>
                </div>
                <div className='section-details'>
                  <p>{t('partner.contact')} <a href='mailto: sales@rivetz.com'>sales@rivetz.com</a></p>
                </div>
                <hr />
                <div className='section-details'>
                  <p>{t('partner.learn')}</p>
                </div>
                <div className='section-buttons'>
                  <PartnerButton program />
                  <a href='https://api.rivetz.com/pdf/auth_graphic_report.pdf' target='_blank' rel='noreferrer' className='off-color'>
                      2FA Study
                  </a>

                </div>
              </div>
            </div>

          </div>
        </div>
      </LayoutGeneric>
    )
  }
}

EntAuth.propTypes = {
  t: PropTypes.func.isRequired
}

export default withNamespaces(['enterprise-authentication', 'common'])(EntAuth)
