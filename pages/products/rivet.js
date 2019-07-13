import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { Link, withNamespaces } from '../../i18n'

import CompatibilityButton from '../../components/micro/CompatibilityButton'

// import Link from 'next/link'
import LayoutGeneric from '../../components/layouts/Generic'

class Home extends React.Component {
  constructor () {
    super()
    this.state = {

    }
  }

  // Called from server (page refresh) & client (client nav)
  static async getInitialProps () {
    return { // Return obj
      namespacesRequired: ['common', 'rivet']
    }
  }

  render () {
    const { t } = this.props
    const currentURL = '/products/rivet'
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

          <link rel='stylesheet' href='/static/css/rivet.css' />

        </Head>

        {/* Page Section: Hero */}
        <div className='uk-section-large page-section section-intro'>
          <div className='uk-container uk-container-large uk-grid-collapse' data-uk-grid>
            <div className='uk-width-1-1@xs uk-width-3-5@l'>
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
                <Link href='/download'>
                  <a>
                    {t('hero.download')}
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className='illustration uk-visible@l app' data-uk-scrollspy='cls: uk-animation-slide-right-medium; repeat: true'>
            <img src='/static/img/illustrations/rivet/app.svg' className='ill-hero' />
          </div>
          <div className='illustration uk-visible@l key1'>
            <img src='/static/img/illustrations/rivet/key1.svg' className='ill-hero' />
          </div>
          <div className='illustration uk-visible@l key2'>
            <img src='/static/img/illustrations/rivet/key2.svg' className='ill-hero' />
          </div>
          <div className='illustration uk-visible@l key3'>
            <img src='/static/img/illustrations/rivet/key3.svg' className='ill-hero' />
          </div>
        </div>

        {/* Page Section: Safe */}
        <div className='uk-section-large page-section section-safe'>
          <div className='uk-container-large uk-grid-collapse uk-flex uk-flex-right' data-uk-grid>
            <div className='illustration is-left is-devs safe uk-visible@l' data-uk-scrollspy='cls: uk-animation-slide-left-medium; repeat: true'>
              <img src='/static/img/illustrations/rivet/safe.svg' className='ill-hero' />
            </div>
            <div className='uk-width-1-1@xs uk-width-1-2@l'>
              <div className='section-content' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                <div className='section-head'>
                  <h1>{t('safe.header')}</h1>
                </div>
                <div className='section-details'>
                  <p>{t('safe.details')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Section: Decision */}
        <div className='uk-section-large page-section section-decision'>
          <div className='uk-container-large uk-grid-collapse' data-uk-grid>
            <div className='uk-width-1-1@xs uk-width-1-2@l'>
              <div className='section-content' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                <div className='section-head'>
                  <h1>{t('decision.header')}</h1>
                </div>
                <div className='section-details'>
                  <p>{t('decision.details')}</p>
                </div>
              </div>
            </div>
            <div className='illustration woman uk-visible@l' data-uk-scrollspy='cls: uk-animation-slide-left-medium; repeat: true'>
              <img src='/static/img/illustrations/rivet/woman-universe.svg' className='ill-hero' />
            </div>
            <div className='illustration grass uk-visible@l' data-uk-scrollspy='cls: uk-animation-slide-left-medium; repeat: true'>
              <img src='/static/img/illustrations/rivet/grass.svg' className='ill-hero' />
            </div>
          </div>
        </div>

        {/* Page Section: Decision */}
        <div className='uk-section-large page-section section-security'>
          <div className='uk-container-large uk-grid-collapse' data-uk-grid>
            <div className='uk-width-1-1@xs'>
              <div className='section-content' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                <div className='section-head'>
                  <h1>{t('security.header')}</h1>
                </div>
                <div className='section-details'>
                  <p>{t('security.details')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Section: Learn More */}
        <div className='uk-section-large page-section section-more'>
          <div className='uk-container-large uk-grid-collapse uk-flex uk-flex-right' data-uk-grid>
            <div className='illustration is-left is-devs learn-keys uk-visible@l' data-uk-scrollspy='cls: uk-animation-slide-left-medium; repeat: true'>
              <img src='/static/img/illustrations/rivet/learn-keys.svg' className='ill-hero' />
            </div>
            <div className='uk-width-1-1@xs uk-width-1-2@l'>
              <div className='section-content' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                <div className='section-head'>
                  <h1>{t('learn.header')}</h1>
                </div>
                <div className='section-buttons'>
                  <div>
                    <Link href='/network'>
                      <a className='off-color'>
                        {t('learn.about')}
                      </a>
                    </Link>
                  </div>

                  <div className='buttons-linear'>
                    <CompatibilityButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </LayoutGeneric>
    )
  }
}

Home.propTypes = {
  t: PropTypes.func.isRequired
}

export default withNamespaces(['rivet', 'common'])(Home)
