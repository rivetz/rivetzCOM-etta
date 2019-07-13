import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { withNamespaces } from '../../i18n'

import PartnerButton from '../../components/micro/PartnerButton'

// import Link from 'next/link'
import LayoutGeneric from '../../components/layouts/Generic'

class Network extends React.Component {
  constructor () {
    super()
    this.state = {

    }
  }

  // Called from server (page refresh) & client (client nav)
  static async getInitialProps () {
    return { // Return obj
      namespacesRequired: ['policy-engine', 'common']
    }
  }

  render () {
    const { t } = this.props
    const currentURL = '/solutions/policy-engine'
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

          <link rel='stylesheet' href='/static/css/policy-engine.css' />

        </Head>

        {/* Page Section: Hero */}
        <div className='uk-section-large page-section section-intro'>
          <div className='illustration uk-visible@l app' data-uk-scrollspy='cls: uk-animation-slide-right-medium; repeat: true'>
            <img src='/static/img/illustrations/solutions/controls.svg' className='ill-hero' />
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
              </div>
            </div>
          </div>
        </div>

        {/* Page Section: Winning */}
        <div className='uk-section-large page-section section-winning'>
          <div className='uk-container-large' data-uk-grid>
            <div className='uk-width-1-1@xs uk-text-center'>
              <div className='section-content' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                <div className='section-head'>
                  <h1>{t('winning.header')}</h1>
                </div>
                <div className='section-details'>
                  <p>{t('winning.details')}</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Page Section: Developers */}
        <div className='uk-section-large page-section section-developers'>
          <div className='uk-container-large uk-grid-collapse' data-uk-grid>
            <div className='illustration uk-visible@l' data-uk-scrollspy='cls: uk-animation-slide-left-medium; repeat: true'>
              <img src='/static/img/illustrations/index/developer-tools-alt.svg' className='ill-hero' />
            </div>
            <div className='uk-width-1-1@xs uk-width-1-2@l'>
              <div className='section-content' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                <div className='section-head'>
                  <h1>{t('developers.header')}</h1>
                </div>
                <div className='section-details'>
                  <p>{t('developers.details')}</p>

                  <ul className='reasons'>
                    <li>{t('developers.reason1')}</li>
                    <li>{t('developers.reason2')}</li>
                    <li>{t('developers.reason3')}</li>
                  </ul>
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
                <div className='section-buttons'>
                  <PartnerButton />
                </div>
              </div>
            </div>

          </div>
        </div>
      </LayoutGeneric>
    )
  }
}

Network.propTypes = {
  t: PropTypes.func.isRequired
}

export default withNamespaces(['policy-engine', 'common'])(Network)
