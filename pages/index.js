import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { Link, withNamespaces } from '../i18n'
import indexContent from '../static/locales/en/index.json'
import PartnerButton from '../components/micro/PartnerButton'
import DeveloperToolsButton from '../components/micro/DeveloperToolsButton'

// import Link from 'next/link'
import LayoutGeneric from '../components/layouts/Generic'

class Home extends React.Component {
  constructor () {
    super()
    this.state = {
      sliderIncrement: 0
    }
    this.incrementSlider = this.incrementSlider.bind(this)
  }

  // Called from server (page refresh) & client (client nav)
  static async getInitialProps () {
    return { // Return obj
      namespacesRequired: ['common', 'index']
    }
  }

  // Increment slider,
  incrementSlider (e) {
    if (this.state.sliderIncrement > 6) {
      this.setState({
        sliderIncrement: 0
      })
    } else {
      this.setState({
        sliderIncrement: this.state.sliderIncrement + 1
      })
    }
    return true
  }

  render () {
    const { t } = this.props
    return (
      <LayoutGeneric>

        <Head>
          <title>Rivetz - {t('common:site-slogan')}</title>
          <meta name='description' content={t('common:site-description')} />
          <meta name='canonical' content={'https://rivetz.com/'} />

          <meta itemProp='name' content={'Rivetz - ' + t('common:site-slogan')} />
          <meta itemProp='description' content={t('common:site-description')} />
          <meta itemProp='image' content='/static/logo/250px.png' />
          <meta name='og:title' content={'Rivetz - ' + t('common:site-slogan')} />
          <meta name='og:description' content={t('common:site-description')} />
          <meta name='og:image' content='/static/logo/250px.png' />
          <meta name='og:url' content={'https://rivetz.com'} />
          <meta name='og:site_name' content='Rivetz' />
          <meta name='og:type' content='website' />
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:title' content={'Rivetz - ' + t('common:site-slogan')} />
          <meta name='twitter:description' content={t('common:site-description')} />
          <meta name='twitter:site' content='@RivetzCorp' />
          <meta name='twitter:image:src' content='/static/logo/250px.png' />

          <link rel='stylesheet' href='/static/css/index.css' />

        </Head>

        {/* Page Section: Hero */}
        <div className='uk-section-large page-section section-intro'>
          <div className='uk-container uk-container-large uk-grid-collapse' data-uk-grid>
            <div className='uk-width-1-1@xs uk-width-1-2@l'>
              <div className='section-content'>
                <Link href='/products/authenticator'>
                  <a className='announce' data-uk-scrollspy='cls: uk-animation-slide-left-medium; repeat: true'>
                    <span className='uk-badge'>{t('new')}</span> <span className='badge-details'>{t('index:hero.announce')}</span>
                  </a>
                </Link>
                <div className='section-head' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                  <h1>{t('index:hero.header')}</h1>
                </div>
                <div className='section-details' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                  <p>{t('index:hero.details')}</p>
                </div>
              </div>

              <div className='section-buttons'>
                <DeveloperToolsButton extraClass={'off-color'} />
                <PartnerButton />
              </div>
            </div>
          </div>
          <div className='illustration uk-visible@l' data-uk-scrollspy='cls: uk-animation-slide-right-medium; repeat: true'>
            <img src='/static/img/illustrations/index/hero2.png' className='ill-hero' data-uk-svg='stroke-animation: true' />
          </div>
        </div>

        {/* Page Section: Developers */}
        <div className='uk-section-large page-section section-devs'>
          <div className='uk-container-large uk-grid-collapse uk-flex uk-flex-right' data-uk-grid>
            <div className='illustration is-left is-devs uk-visible@l' data-uk-scrollspy='cls: uk-animation-shake; repeat: true'>
              <img src='/static/img/illustrations/index/developers.svg' className='ill-hero' />
            </div>
            <div className='illustration is-left keys uk-visible@l' data-uk-scrollspy='cls: uk-animation-slide-left; repeat: true'>
              <img src='/static/img/illustrations/index/developers-keys.svg' />
            </div>
            <div className='uk-width-1-1@xs uk-width-1-2@l'>
              <div className='section-content' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                <div className='section-head'>
                  <h1>{t('devs.header')}</h1>
                </div>
                <div className='section-details'>
                  <p>{t('devs.details')}</p>
                </div>
              </div>
              <div className='section-buttons' data-uk-scrollspy='cls: uk-animation-slide-left-medium; repeat: true'>
                <DeveloperToolsButton extraClass={'off-color'} />
                <PartnerButton program={false} />
              </div>
            </div>
          </div>

          <div className='illustration dev-down uk-visible@l' data-uk-scrollspy='cls: uk-animation-scale-up; repeat: true'>
            <img src='/static/img/illustrations/index/developer-key-down.svg' />
          </div>
        </div>

        {/* Page Section: Rivetz Network Slider */}
        <div className='uk-section-large page-section section-devs section-slider-cont'>
          <div className='uk-container-large uk-grid-collapse' data-uk-grid>
            <div className='uk-width-1-1@xs'>
              <div className='section-content'>
                <div className='section-head'>
                  <h1 data-uk-scrollspy='cls: uk-animation-slide-top-medium; repeat: true'>{t('index:network.header')}</h1>
                </div>
              </div>
              <div className='section-slider'>
                <ul style={{ 'marginLeft': 'calc(' + (this.state.sliderIncrement * -1) + '* (380px + 2vw))' }} data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                  {indexContent.network.items.map((item, index) => (
                    <li key={index}>
                      <Link href={'/network/' + t(`network.items.${index}.url`)}>
                        <a>
                          <div className='indice'>{index + 1}</div>
                          <h5 className={'is-' + index}>{t(`network.items.${index}.title`)}</h5>
                          <p>
                            {t(`network.items.${index}.details`)}
                            {t('common:more')}
                          </p>
                        </a>
                      </Link>

                    </li>
                  ))}
                </ul>
                <div className='slider-nav'>
                  <svg className='slider-increment' onClick={this.incrementSlider} width='83' height='83' viewBox='0 0 83 83' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <mask id='mask0' mask-type='alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='83' height='83'>
                      <circle cx='41.2959' cy='41.7217' r='41' fill='#F47E3E' />
                    </mask>
                    <g mask='url(#mask0)'>
                      <circle cx='41.2959' cy='41.7217' r='41' fill='#F47E3E' />
                      <path className='eclipse' opacity='0.4' fill-rule='evenodd' clip-rule='evenodd' d='M7.57714 64.9141C19.863 75.0208 37.4526 77.4923 52.5245 69.7952C72.7945 59.4435 80.8348 34.6197 70.4831 14.3497C69.6705 12.7584 68.7686 11.2424 67.7867 9.80483C72.0239 13.2905 75.6303 17.6843 78.2849 22.8824C88.6366 43.1524 80.5962 67.9762 60.3262 78.3279C41.6476 87.8669 19.102 81.7883 7.57714 64.9141Z' fill='#F6AB52' />
                      <path className='arrow-right' d='M41.083 24.3176L41.0831 24.3175C41.2668 24.1337 41.5648 24.1337 41.7486 24.3175L41.7486 24.3176L58.8201 41.389C58.8201 41.389 58.8202 41.389 58.8202 41.389C59.004 41.5729 59.0039 41.8709 58.8202 42.0547L41.7486 59.1262C41.5648 59.3099 41.2668 59.3099 41.083 59.1262L41.083 59.1261L40.5111 58.5543C40.5111 58.5543 40.5111 58.5543 40.5111 58.5543C40.5111 58.5543 40.511 58.5543 40.511 58.5543C40.4335 58.4768 40.3306 58.3995 40.2514 58.3402C40.2357 58.3285 40.2201 58.3169 40.2046 58.3053C40.1299 58.2497 40.0559 58.1945 39.9799 58.1333C39.7913 57.9813 39.6483 57.8359 39.5738 57.6943C39.5133 57.5794 39.4959 57.4694 39.5656 57.3144C39.65 57.1271 39.8793 56.8412 40.4342 56.4724L40.4766 56.4442L40.5125 56.4081L52.6686 44.1543L53.5139 43.3021H52.3136H23.7282C23.7161 43.3021 23.7069 43.3017 23.7002 43.3011C23.6976 43.2947 23.6947 43.2863 23.6915 43.2754C23.6818 43.2415 23.6733 43.1936 23.6686 43.1289C23.6589 42.996 23.6679 42.8377 23.6835 42.6573C23.6862 42.6263 23.6892 42.5934 23.6923 42.5594C23.7053 42.4181 23.72 42.2573 23.72 42.1263V41.3174C23.72 41.1711 23.6977 40.9875 23.6786 40.83C23.6752 40.8022 23.6719 40.7752 23.6689 40.7494C23.6459 40.5543 23.6293 40.3785 23.6348 40.2276C23.6397 40.0946 23.6607 40.0314 23.6715 40.0083C23.6817 40.0061 23.6998 40.0035 23.7282 40.0035H52.3136H53.5236L52.6666 39.1493L40.5105 27.0336L40.4846 27.0079L40.4553 26.9861C40 26.6486 39.8058 26.3776 39.7299 26.1881C39.6612 26.0164 39.6755 25.878 39.7314 25.7441C39.7943 25.5935 39.9144 25.4423 40.0685 25.2909C40.1436 25.2171 40.2201 25.1496 40.2954 25.084C40.3036 25.0769 40.312 25.0695 40.3207 25.0621C40.3834 25.0076 40.4556 24.9449 40.511 24.8895C40.511 24.8895 40.5111 24.8895 40.5111 24.8895L41.083 24.3176ZM23.6841 43.2986C23.6841 43.2986 23.6845 43.2987 23.6853 43.299L23.6841 43.2986Z' fill='#F7F8FC' stroke='#FBFCFF' />
                    </g>
                  </svg>
                  {/* <img className="slider-increment" onClick={this.incrementSlider} src="/static/img/nav/slider-right.svg" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Section: Get Rivetz */}
        <div className='uk-section page-section section-get'>
          <div className='illustration get-top uk-visible@l' data-uk-scrollspy='cls: uk-animation-slide-left; repeat: true'>
            <img src='/static/img/illustrations/index/get-key-top.svg' />
          </div>
          <div className='illustration get-bottom uk-visible@l' data-uk-scrollspy='cls: uk-animation-shake; repeat: true'>
            <img src='/static/img/illustrations/index/get-key-bottom.svg' />
          </div>
          <div className='uk-container uk-container-large uk-grid-collapse' data-uk-grid>
            <div className='uk-width-1-1@xs uk-width-2-3@l'>
              <div className='section-content' data-uk-scrollspy='cls: uk-animation-slide-top-medium; repeat: true'>
                <div className='section-head'>
                  <h1>{t('index:get.header')}</h1>
                </div>
                <div className='section-details get-details'>
                  <p>{t('index:get.details')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='uk-container uk-container-large uk-grid-collapse' data-uk-grid>
            <div className='uk-width-1-1@xs uk-width-1-3@l'>
              <div className='section-get-item is-first' data-uk-scrollspy='cls: uk-animation-slide-left-medium; repeat: true'>
                <div className='get-item-icon'>
                  <img src='/static/img/illustrations/index/get-rivet.svg' />
                </div>
                <div className='section-head'>
                  <h1>{t('index:get.options.download.title')}</h1>
                </div>
                <div className='section-details'>
                  <p>{t('index:get.options.download.details')}</p>
                </div>
                <Link href='/download'>
                  <a className='get-item-button'>
                    Download Rivet
                  </a>
                </Link>
              </div>
            </div>
            <div className='uk-width-1-1@xs uk-width-1-3@l'>
              <div className='section-get-item' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium; repeat: true'>
                <div className='get-item-icon'>
                  <img src='/static/img/illustrations/index/get-apps.svg' />
                </div>
                <div className='section-head'>
                  <h1>{t('index:get.options.apps.title')}</h1>
                </div>
                <div className='section-details'>
                  <p>{t('index:get.options.apps.details')}</p>
                </div>
                <Link href='/download'>
                  <a className='get-item-button'>
                    See Riveted App Store
                  </a>
                </Link>
              </div>
            </div>
            <div className='uk-width-1-1@xs uk-width-1-3@l'>
              <div className='section-get-item is-devs' data-uk-scrollspy='cls: uk-animation-slide-right-medium; repeat: true'>
                <div className='get-item-icon'>
                  <img src='/static/img/illustrations/index/get-devs.svg' />
                </div>
                <div className='section-head'>
                  <h1>{t('index:get.options.devs.title')}</h1>
                </div>
                <div className='section-details'>
                  <p>{t('index:get.options.devs.details')}</p>
                </div>
                <a href='https://developer.rivetz.com/?ref=com' target='_blank' rel='noreferrer' className='get-item-button'>
                  Get the Tools
                </a>
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

export default withNamespaces(['index', 'common'])(Home)