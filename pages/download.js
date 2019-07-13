import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { Link, withNamespaces } from '../i18n'

// import Link from 'next/link'
import LayoutGeneric from '../components/layouts/Generic'

class Download extends React.Component {
  constructor () {
    super()
    this.state = {
    }
  }

  // Called from server (page refresh) & client (client nav)
  static async getInitialProps () {
    return { // Return obj
      namespacesRequired: ['download', 'common']
    }
  }

  render () {
    const { t } = this.props
    const currentURL = '/download'

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

          <link rel='stylesheet' href='/static/css/download.css' />

        </Head>

        {/* Page Section: Hero */}
        <div className='uk-section-large page-section section-intro'>

          <div className='illustration uk-visible@l app' data-uk-scrollspy='cls: uk-animation-slide-right-medium; repeat: true'>
            <img src='/static/img/illustrations/solutions/hero.svg' className='ill-hero' />
          </div>
          <div className='uk-container uk-container-large uk-grid-collapse' data-uk-grid>
            <div className='uk-width-1-1@xs uk-width-1-2@l'>
              <div className='section-content'>
                <div className='section-announce' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium'>
                  <h3>Rivetz</h3>
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

        {/* Page Section: Compat Instructions */}
        <div className='uk-section-large page-section section-instruction section-compat'>
          <div className='uk-container-large uk-grid-collapse' data-uk-grid>
            <div className='uk-width-1-1@xs uk-width-3-5@l'>
              <h2 id='compatibility'><span>1.</span> {t('compat.header')}</h2>
              <p>{t('compat.details')}</p>

              <div className='section-buttons'>
                <Link href='/compatibility'>
                  <a target='_blank'>
                    {t('compat.cta')}
                  </a>
                </Link>
                <Link href='#download-rivet'>
                  <a className='off-color' data-uk-scroll='offset: 100;'>
                    {t('compat.continue')}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Page Section: Rivet Instructions */}
        <div className='uk-section-large page-section section-instruction section-rivet'>
          <div className='uk-container-large uk-grid-collapse' data-uk-grid>
            <div className='uk-width-1-1@xs uk-width-3-5@l padTop2vh'>
              <h2 id='download-rivet'><span>2.</span> {t('rivet.header')}</h2>
              <p>{t('rivet.details')}</p>

              <div className='section-buttons'>
                <a href='https://play.google.com/store/apps/details?id=com.rivetz.adapter' target='_blank' rel='noreferrer'>
                  {t('rivet.cta')}
                </a>
                <Link href='#download-auth'>
                  <a className='off-color' data-uk-scroll='offset: 100;'>
                    {t('rivet.continue')}
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className='illustration safe uk-visible@l' data-uk-scrollspy='cls: uk-animation-slide-left-medium; repeat: true'>
            <img src='/static/img/illustrations/rivet/safe.svg' className='ill-hero' />
          </div>
        </div>

        {/* Page Section: Auth Instructions */}
        <div className='uk-section-large page-section section-instruction section-auth'>
          <div className='uk-container-large uk-grid-collapse' data-uk-grid>
            <div className='uk-width-1-1@xs uk-width-3-5@l padTop2vh'>
              <h2 id='download-auth'><span>3.</span> {t('auth.header')}</h2>
              <p>{t('auth.details')}</p>

              <div className='section-buttons'>
                <a href='https://play.google.com/store/apps/details?id=com.rivetz.rivetz2fa' target='_blank' rel='noreferrer'>
                  {t('auth.cta')}
                </a>
                <a href='https://developer.rivetz.com/?ref=comdl' target='_blank' rel='noreferrer' className='off-color'>
                  {t('auth.continue')}
                </a>
              </div>
            </div>
          </div>
          <div className='illustration uk-visible@l app' data-uk-scrollspy='cls: uk-animation-slide-right-medium; repeat: true'>
            <img src='/static/img/illustrations/authenticator/phone.svg' className='ill-hero' />
          </div>
        </div>

      </LayoutGeneric>
    )
  }
}

Download.propTypes = {
  t: PropTypes.func.isRequired
}

export default withNamespaces(['download', 'common'])(Download)
