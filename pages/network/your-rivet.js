import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { Link, withNamespaces } from '../../i18n'

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
      namespacesRequired: ['network', 'common']
    }
  }

  render () {
    const { t } = this.props
    const networkSection = 'your-rivet'
    const currentURL = '/network/' + networkSection

    return (
      <LayoutGeneric>

        <Head>
          <title>{t(networkSection + '.header')} - The Rivetz Network</title>
          <meta name='description' content={t(networkSection + '.details') + ' Learn about The Rivetz Network!'} />
          <meta name='canonical' content={'https://rivetz.com' + currentURL} />

          <meta itemProp='name' content={t(networkSection + '.header') + ' - The Rivetz Network'} />
          <meta itemProp='description' content={t(networkSection + '.details') + ' Learn about The Rivetz Network!'} />
          <meta itemProp='image' content='/static/logo/250px.png' />
          <meta name='og:title' content={t(networkSection + '.header') + ' - The Rivetz Network'} />
          <meta name='og:description' content={t(networkSection + '.details') + ' Learn about The Rivetz Network!'} />
          <meta name='og:image' content='/static/logo/250px.png' />
          <meta name='og:url' content={'https://rivetz.com' + currentURL} />
          <meta name='og:site_name' content='Rivetz' />
          <meta name='og:type' content='website' />
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:title' content={t(networkSection + '.header') + ' - The Rivetz Network'} />
          <meta name='twitter:description' content={t(networkSection + '.details') + ' Learn about The Rivetz Network!'} />
          <meta name='twitter:site' content='@RivetzCorp' />
          <meta name='twitter:image:src' content='/static/logo/250px.png' />

          <link rel='stylesheet' href='/static/css/network.css' />

        </Head>

        {/* Page Section: Hero */}
        <div className='uk-section-large page-section section-intro'>
          <div className='illustration uk-visible@l key2'>
            <img src='/static/img/illustrations/rivet/key2.svg' className='ill-hero' />
          </div>
          <div className='illustration uk-visible@l key3'>
            <img src='/static/img/illustrations/rivet/key3.svg' className='ill-hero' />
          </div>
          <div className='illustration uk-visible@l app' data-uk-scrollspy='cls: uk-animation-slide-right-medium; repeat: true'>
            <img src='/static/img/illustrations/solutions/hero.svg' className='ill-hero' />
          </div>
          <div className='uk-container uk-container-large uk-grid-collapse' data-uk-grid>
            <div className='uk-width-1-1@xs uk-width-4-5@l'>
              <div className='section-content'>
                <div className='section-announce' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium'>
                  <h3>{t('common:rivetz-network')}</h3>
                </div>
                <div className='section-head' >
                  <h1>{t('your-rivet.header')}</h1>
                </div>
                <div className='section-details'>
                  <p>{t('your-rivet.details')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Section: Chapter Content */}
        <div className='uk-section-large page-section section-content'>
          <div className='uk-container uk-container-large uk-grid-collapse' data-uk-grid>
            <div id='current' className='uk-width-1-1@xs uk-width-3-5@l'>
              <p>{t('your-rivet.content')}</p>
              <p>{t('your-rivet.content2')}</p>
              <p>{t('your-rivet.content3')}</p>
              <h4>{t('your-rivet.summary')}</h4>
            </div>
            <div className='section-buttons uk-width-1-1@xs uk-width-3-5@l' data-uk-scrollspy='cls: uk-animation-slide-bottom; repeat: true'>
              <PartnerButton />

              <Link>
                <a className='off-color' href='/network/permanent-record'>
                  {t('common:next') + ': ' + t('permanent-record.header')}
                </a>
              </Link>
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

export default withNamespaces(['network', 'common'])(Network)
