import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { Link, withNamespaces } from '../i18n'
import WhitePapers from '../components/globals/WhitePapers'

import PartnerButton from '../components/micro/PartnerButton'

// import Link from 'next/link'
import LayoutGeneric from '../components/layouts/Generic'

class Confirm extends React.Component {
  constructor () {
    super()
    this.state = {
    }
  }
  // Called from server (page refresh) & client (client nav)
  static async getInitialProps () {
    return { // Return obj
      namespacesRequired: ['solutions', 'common']
    }
  }

  render () {
    const { t } = this.props
    const currentURL = '/products/authenticator'
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

          <link rel='stylesheet' href='/static/css/solutions.css' />

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
            <img src='/static/img/illustrations/solutions/hero.svg' className='ill-hero' />
          </div>
        </div>

        {/* Page Section: Controls */}
        <div className='uk-section-large page-section section-controls'>
          <div className='uk-container-large uk-grid-collapse uk-flex uk-flex-right' data-uk-grid>
            <div className='illustration is-left is-devs phone uk-visible@l' data-uk-scrollspy='cls: uk-animation-slide-left-medium; repeat: true'>
              <img src='/static/img/illustrations/solutions/controls.svg' className='ill-hero' />
            </div>
            <div className='uk-width-1-1@xs uk-width-3-5@l'>
              <div className='section-content' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                <div className='section-head'>
                  <h1>{t('controls.header')}</h1>
                </div>
                <div className='section-details'>
                  <p>{t('controls.details')}</p>
                </div>
                <div className='section-buttons'>
                  <Link href='/solutions/policy-engine'>
                    <a>
                      {t('controls.cta')}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Section: Collections */}
        <div className='uk-section-large page-section section-collections'>
          <div className='uk-container-large uk-grid-collapse' data-uk-grid>
            <div className='illustration uk-visible@l' data-uk-scrollspy='cls: uk-animation-slide-left-medium; repeat: true'>
              <img src='/static/img/illustrations/solutions/collections.svg' className='ill-hero' />
            </div>
            <div className='uk-width-1-1@xs uk-width-1-2@l'>
              <div className='section-content' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                <div className='section-head'>
                  <h1>{t('collections.header')}</h1>
                </div>
                <div className='section-details'>
                  <p>{t('collections.details')}</p>
                </div>
                <div className='section-buttons'>
                  <Link href='/solutions/collection-of-devices'>
                    <a>
                      {t('collections.cta')}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Section: Authentication */}
        <div className='uk-section-large page-section section-organized'>
          <div className='uk-container-large uk-grid-collapse uk-flex uk-flex-right' data-uk-grid>
            <div className='illustration is-left is-devs phone uk-visible@l' data-uk-scrollspy='cls: uk-animation-slide-left-medium; repeat: true'>
              <img src='/static/img/illustrations/solutions/authentication.svg' className='ill-hero' />
            </div>
            <div className='uk-width-1-1@xs uk-width-3-5@l'>
              <div className='section-content' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                <div className='section-head'>
                  <h1>{t('authentication.header')}</h1>
                </div>
                <div className='section-details'>
                  <p>{t('authentication.details')}</p>
                </div>
                <div className='section-buttons'>
                  <Link href='/solutions/enterprise-authentication'>
                    <a>
                      {t('authentication.cta')}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Section: DRT */}
        <div className='uk-section-large page-section section-drt'>
          <div className='uk-container-large uk-grid-collapse' data-uk-grid>
            <div className='illustration uk-visible@l' data-uk-scrollspy='cls: uk-animation-slide-left-medium; repeat: true'>
              <img src='/static/img/illustrations/solutions/drt.svg' className='ill-hero' />
            </div>
            <div className='uk-width-1-1@xs uk-width-2-5@l'>
              <div className='section-content' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                <div className='section-head'>
                  <h1>{t('drt.header')}</h1>
                </div>
                <div className='section-details'>
                  <p>{t('drt.details')}</p>
                </div>
                <div className='section-buttons'>
                  <Link href='/solutions/dual-roots-of-trust'>
                    <a>
                      {t('drt.cta')}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Section: Services */}
        <div className='uk-section-large page-section section-services'>
          <div className='uk-container-large uk-grid-collapse uk-flex uk-flex-right' data-uk-grid>
            <div className='illustration key1 uk-visible@l' data-uk-scrollspy='cls: uk-animation-slide-left-medium; repeat: true'>
              <img src='/static/img/illustrations/solutions/serviceskey1.svg' className='ill-hero' />
            </div>
            <div className='illustration key2 uk-visible@l' data-uk-scrollspy='cls: uk-animation-slide-left-medium; repeat: true'>
              <img src='/static/img/illustrations/solutions/serviceskey2.svg' className='ill-hero' />
            </div>
            <div className='uk-width-1-1@xs uk-text-center'>
              <div className='section-content' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                <div className='section-head'>
                  <h1>{t('services.header')}</h1>
                </div>
                <div className='section-details'>
                  <p>{t('services.details')}</p>
                </div>
                <div className='section-buttons'>
                  <Link href='/solutions/professional-services'>
                    <a>
                      {t('services.cta')}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='uk-section-large page-section section-papers'>
          <div className='uk-container-large uk-grid-collapse' data-uk-grid>
            <div className='uk-width-1-1@xs'>
              <div className='section-content' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                <div className='section-head'>
                  <h1>{t('papers.header')}</h1>
                </div>
                <div className='section-details'>
                  <p>{t('papers.details')}</p>
                </div>
                <WhitePapers />
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

export default withNamespaces(['solutions', 'common'])(Confirm)
