import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { withNamespaces } from '../../i18n'

import PartnerButton from '../../components/micro/PartnerButton'

// import Link from 'next/link'
import LayoutGeneric from '../../components/layouts/Generic'

class Confirm extends React.Component {
  constructor () {
    super()
    this.state = {
    }
  }
  // Called from server (page refresh) & client (client nav)
  static async getInitialProps () {
    return { // Return obj
      namespacesRequired: ['jarz', 'common']
    }
  }

  render () {
    const { t } = this.props
    const currentURL = '/products/jarz'
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

          <link rel='stylesheet' href='/static/css/jarz.css' />

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
            <img src='/static/img/illustrations/jarz/hero-phone.svg' className='ill-hero' />
          </div>
          <div className='illustration uk-visible@l key1'>
            <img src='/static/img/illustrations/jarz/hero-key.svg' className='ill-hero' />
          </div>
        </div>

        {/* Page Section: Transfer */}
        <div className='uk-section-large page-section section-transfer'>
          <div className='uk-container-large uk-grid-collapse uk-flex uk-flex-right' data-uk-grid>
            <div className='illustration is-left is-devs phone uk-visible@l' data-uk-scrollspy='cls: uk-animation-slide-left-medium; repeat: true'>
              <img src='/static/img/illustrations/jarz/transfer.png' className='ill-hero' />
            </div>
            <div className='uk-width-1-1@xs uk-width-3-5@l'>
              <div className='section-content' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                <div className='section-head'>
                  <h1>{t('transfer.header')}</h1>
                </div>
                <div className='section-details'>
                  <p>{t('transfer.details')}</p>
                </div>
                <div className='section-buttons'>
                  <PartnerButton />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Section: Safety */}
        <div className='uk-section-large page-section section-safety'>
          <div className='uk-container-large uk-grid-collapse' data-uk-grid>
            <div className='illustration uk-visible@l' data-uk-scrollspy='cls: uk-animation-slide-left-medium; repeat: true'>
              <img src='/static/img/illustrations/jarz/safety.svg' className='ill-hero' />
            </div>
            <div className='uk-width-1-1@xs uk-width-1-2@l'>
              <div className='section-content' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                <div className='section-head'>
                  <h1>{t('safety.header')}</h1>
                </div>
                <div className='section-details'>
                  <p>{t('safety.details')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Section: Organized */}
        <div className='uk-section-large page-section section-organized'>
          <div className='uk-container-large uk-grid-collapse uk-flex uk-flex-right' data-uk-grid>
            <div className='illustration is-left is-devs phone uk-visible@l' data-uk-scrollspy='cls: uk-animation-slide-left-medium; repeat: true'>
              <img src='/static/img/illustrations/jarz/organized.svg' className='ill-hero' />
            </div>
            <div className='uk-width-1-1@xs uk-width-3-5@l'>
              <div className='section-content' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                <div className='section-head'>
                  <h1>{t('organized.header')}</h1>
                </div>
                <div className='section-details'>
                  <p>{t('organized.details')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Section: Beta */}
        <div className='uk-section-large page-section section-beta'>
          <div className='uk-container-large uk-grid-collapse uk-flex uk-flex-right' data-uk-grid>
            <div className='uk-width-1-1@xs uk-text-center'>
              <div className='section-content' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                <div className='section-head'>
                  <h1>{t('actionable.header')}</h1>
                </div>
                <div className='section-details'>
                  <p>{t('actionable.details')}</p>
                  <hr />
                  <p>{t('actionable.quick-start')}</p>
                </div>
                <div className='section-buttons'>
                  <a href='mailto:sales@rivetz.com'>
                    {t('common:contact-sales')}
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

Confirm.propTypes = {
  t: PropTypes.func.isRequired
}

export default withNamespaces(['jarz', 'common'])(Confirm)
