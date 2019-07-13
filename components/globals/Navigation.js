import React from 'react'
import PropTypes from 'prop-types'
import { withNamespaces } from '../../i18n'
import Link from 'next/link' // eslint-disable-line
import SocialNav from './SocialNav'
import axios from 'axios'

class Navigation extends React.Component {
  constructor () {
    super()
    this.state = {
      language: 'en',
      blog: []
    }
    this.changeLang = this.changeLang.bind(this)
  }

  static async getInitialProps () {
    return { // Return obj
      namespacesRequired: ['common'],
      language: 'en'
    }
  }

  changeLang (lang) {
    this.setState({
      changeLang: lang
    })
  }

  componentDidMount () {
    // Fetch News
    axios.get('//api.rivetz.com/medium')
      .then(({ data }) => {
        return data
      })
      .then(blog => {
        this.setState({ blog: blog.items[0] })
      })
      .catch(err => console.log(err))
  }

  render () {
    const { t } = this.props
    return (
      <nav id='primaryNav' className='uk-visible@m'>
        <div className='uk-container-fluid uk-grid-collapse' data-uk-grid>
          <div className='uk-width-1-5@m'>
            <div className='logoCont uk-width-1-3'>
              <Link href='/'>
                <a>
                  <img src='/static/img/logo/250px.png' alt={'Rivetz ' + t('logo')} />
                </a>
              </Link>
            </div>
          </div>
          <div className='uk-width-4-5@m uk-text-right'>
            <ul className='primaryNav'>
              <li className='has-sub'>
                <Link href='/products/rivet'><a>{t('top.products')}</a></Link>
                <ul>
                  {/* Main Product Links */}
                  <div className='main-focus'>
                    <li className='main-focus'>
                      <Link href='/products/rivet'>
                        <a>
                          <div className='link-icon'>
                            <svg width='41' height='41' viewBox='0 0 41 41' fill='none' xmlns='http://www.w3.org/2000/svg'>
                              <ellipse cx='20.4392' cy='20.6448' rx='20' ry='19.9351' fill='#F47E3E' />
                              <path opacity='0.8' d='M12.4119 3.23407C17.8987 0.563335 24.4998 0.463191 30.2165 3.54571C39.7053 8.6622 43.1644 20.6097 37.9425 30.2311C32.7207 39.8525 20.7953 43.5045 11.3065 38.388C8.18626 36.7056 5.71805 34.2845 3.99609 31.4504C5.52122 33.5508 7.52407 35.3451 9.95349 36.6551C18.7772 41.4129 29.8868 37.9798 34.7674 28.9871C39.6481 19.9943 36.4516 8.84722 27.6279 4.08937C22.7752 1.47272 17.231 1.33352 12.4119 3.23407Z' fill='#F26922' />
                              <path opacity='0.8' d='M40.1624 16.663C37.3694 9.89063 30.7282 5.12693 22.98 5.12693C12.7119 5.12693 4.3879 13.4931 4.3879 23.8134C4.3879 29.7159 7.11076 34.9793 11.3629 38.4038C4.8775 35.1 0.439209 28.3895 0.439209 20.6487C0.439209 9.6367 9.42129 0.709717 20.5013 0.709717C30.2078 0.709717 38.3044 7.56083 40.1624 16.663Z' fill='#F6AB52' />
                              <path opacity='0.4' d='M30.7986 3.54295C29.1555 2.55995 27.3418 1.79815 25.3877 1.30805C14.6787 -1.37787 3.8088 5.11385 1.10918 15.8077C0.0514914 19.9975 0.40488 24.2107 1.87006 27.9474C0.204482 18.7207 2.9328 9.8164 9.83151 4.96764C15.7851 0.783144 23.5454 0.532356 30.7986 3.54295Z' fill='#F47E3E' />
                              <path d='M25.552 22.501C27.3503 21.028 28.4971 18.7947 28.4971 16.2935C28.4971 11.8576 24.8894 8.26221 20.4397 8.26221C16.0149 8.26221 12.4261 11.8185 12.3855 16.2198H12.3816V29.6768V32.7186V32.7231C12.3816 32.8894 12.5183 33.0257 12.6851 33.0257H15.7414C15.9082 33.0257 16.045 32.8894 16.045 32.7231V32.7186V24.6286C16.045 24.4662 16.1758 24.3352 16.3367 24.3287H20.4384V24.3319C22.8588 24.3319 24.8272 26.2946 24.8272 28.7065H24.8318V32.7192V32.7238C24.8318 32.8901 24.9685 33.0263 25.1353 33.0263H28.1916C28.3584 33.0263 28.4951 32.8901 28.4951 32.7238V32.7192V29.6774V28.6263H28.4912C28.4683 26.1583 27.3281 23.9576 25.552 22.501ZM20.4397 20.6687C20.3396 20.6687 17.3082 20.67 16.3505 20.6707C16.1915 20.6615 16.0639 20.5318 16.0639 20.3714L16.062 16.0744C16.1195 13.7987 18.0938 11.9189 20.4397 11.9189C22.8601 11.9189 24.8285 13.8816 24.8285 16.2935C24.8285 18.7061 22.8601 20.6687 20.4397 20.6687Z' fill='white' />
                            </svg>
                          </div>
                          <div className='link-content'>
                            <span className='item'>{t('p.rivet')}</span>
                            <span className='details'>{t('p.rivet_sub')}</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li className='main-focus color-wallet'>
                      <Link href='/products/assured-wallet'>
                        <a>
                          <div className='link-icon'>
                            <svg width='41' height='41' viewBox='0 0 41 41' fill='none' xmlns='http://www.w3.org/2000/svg'>
                              <mask id='mask0' masktype='alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='41' height='41'>
                                <circle cx='20.186' cy='20.4854' r='20' fill='#5670AB' />
                              </mask>
                              <g mask='url(#mask0)'>
                                <circle cx='20.186' cy='20.4854' r='20' fill='#F6AB52' />
                                <path d='M14.9599 14.3342L19.6158 9.61287L21.4622 11.5686L16.7434 16.1936L14.9599 14.3342Z' fill='#FBFCFF' />
                                <path d='M15.6596 17.2563L18.0246 14.9436C18.0246 14.9436 17.4465 14.2092 17.1183 13.8186C16.7902 13.428 16.509 12.7561 16.509 12.7561L12.001 17.2563L19.2236 24.4789L21.0529 22.6496L15.6596 17.2563Z' fill='#FBFCFF' />
                                <path d='M25.6287 20.1467L20.9729 15.4254L19.1265 17.3811L23.8452 22.0061L25.6287 20.1467Z' fill='#FBFCFF' />
                                <path d='M24.929 23.0688L22.564 20.7561C22.564 20.7561 23.1422 20.0217 23.4703 19.6311C23.7984 19.2405 24.0797 18.5686 24.0797 18.5686L28.5876 23.0688L21.3651 30.2914L19.5358 28.4621L24.929 23.0688Z' fill='#FBFCFF' />
                                <path d='M24.8702 23.0597L22.8448 20.8186L22.751 17.2874L28.5288 23.0597L21.3062 30.2823L19.4769 28.453L24.8702 23.0597Z' fill='#FBFCFF' />
                              </g>
                            </svg>
                          </div>
                          <div className='link-content'>
                            <span className='item'>{t('p.wallet')}</span>
                            <span className='details'>{t('p.wallet_sub')}</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li className='main-focus'>
                      <Link href='/products/authenticator'>
                        <a>
                          <div className='link-icon'>
                            <svg width='29' height='41' viewBox='0 0 29 41' fill='none' xmlns='http://www.w3.org/2000/svg'>
                              <path d='M23.2903 16.4581C23.2903 20.3084 20.831 23.5724 17.4282 24.7028V40.7005H6.42811V36.157H12.1673V32.8091H9.89553V28.983H12.1673V24.703C8.76425 23.5727 6.30465 20.3086 6.30465 16.4581C6.30465 15.1956 6.56909 13.9961 7.04452 12.9142L5.46777 8.65697L9.18937 9.94813C10.6853 8.60448 12.6482 7.78955 14.7975 7.78955C19.488 7.78955 23.2903 11.6706 23.2903 16.4581Z' fill='url(#paint0_linear)' />
                              <ellipse cx='7.44956' cy='26.7249' rx='0.785808' ry='0.785808' transform='rotate(-53.5404 7.44956 26.7249)' fill='url(#paint1_linear)' />
                              <ellipse rx='0.785807' ry='0.785806' transform='matrix(0.594256 -0.804276 0.804275 0.594257 21.6646 5.78321)' fill='url(#paint2_linear)' />
                              <ellipse cx='3.70871' cy='22.6143' rx='0.785807' ry='0.785808' transform='rotate(-28.9683 3.70871 22.6143)' fill='url(#paint3_linear)' />
                              <ellipse cx='25.7378' cy='11.0584' rx='0.785806' ry='0.785806' transform='rotate(-28.9683 25.7378 11.0584)' fill='url(#paint4_linear)' />
                              <ellipse cx='1.92816' cy='16.9034' rx='0.785807' ry='0.785807' transform='rotate(-1.15217 1.92816 16.9034)' fill='url(#paint5_linear)' />
                              <ellipse cx='26.9504' cy='16.9034' rx='0.785808' ry='0.785808' transform='rotate(-1.15217 26.9504 16.9034)' fill='url(#paint6_linear)' />
                              <ellipse cx='3.03333' cy='11.0586' rx='0.785808' ry='0.785807' transform='rotate(26.0455 3.03333 11.0586)' fill='url(#paint7_linear)' />
                              <ellipse cx='25.3888' cy='22.6148' rx='0.785808' ry='0.785807' transform='rotate(26.0455 25.3888 22.6148)' fill='url(#paint8_linear)' />
                              <ellipse cx='7.61164' cy='5.78326' rx='0.785807' ry='0.785807' transform='rotate(53.3841 7.61164 5.78326)' fill='url(#paint9_linear)' />
                              <ellipse cx='14.689' cy='3.53434' rx='0.785807' ry='0.785806' transform='rotate(90 14.689 3.53434)' fill='url(#paint10_linear)' />
                              <ellipse rx='0.785807' ry='0.785806' transform='matrix(0.596445 0.802654 -0.802651 0.596449 21.4998 26.7249)' fill='url(#paint11_linear)' />
                              <path d='M16.2353 16.6817C16.7793 16.2347 17.1262 15.5569 17.1262 14.7979C17.1262 13.4517 16.0349 12.3606 14.6889 12.3606C13.3505 12.3606 12.2649 13.4398 12.2527 14.7755H12.2515V18.8593V19.7824V19.7838C12.2515 19.8343 12.2928 19.8756 12.3433 19.8756H13.2678C13.3182 19.8756 13.3596 19.8343 13.3596 19.7838V19.7824V17.3274C13.3596 17.2781 13.3992 17.2383 13.4478 17.2363H14.6885V17.2373C15.4207 17.2373 16.0161 17.8329 16.0161 18.5649H16.0175V19.7826V19.784C16.0175 19.8345 16.0588 19.8758 16.1093 19.8758H17.0338C17.0842 19.8758 17.1256 19.8345 17.1256 19.784V19.7826V18.8595V18.5405H17.1244C17.1175 17.7916 16.7726 17.1237 16.2353 16.6817ZM14.6889 16.1256C14.6586 16.1256 13.7417 16.126 13.452 16.1262C13.4039 16.1235 13.3653 16.0841 13.3653 16.0354L13.3647 14.7314C13.3821 14.0408 13.9793 13.4703 14.6889 13.4703C15.4211 13.4703 16.0165 14.0659 16.0165 14.7979C16.0165 15.53 15.4211 16.1256 14.6889 16.1256Z' fill='white' />
                              <defs>
                                <linearGradient id='paint0_linear' x1='14.3791' y1='7.78955' x2='14.3791' y2='40.7005' gradientUnits='userSpaceOnUse'>
                                  <stop stopColor='#F47E3E' />
                                  <stop offset='1' stopColor='#F26922' />
                                </linearGradient>
                                <linearGradient id='paint1_linear' x1='7.44956' y1='25.939' x2='7.44956' y2='27.5107' gradientUnits='userSpaceOnUse'>
                                  <stop stopColor='#F47E3E' />
                                  <stop offset='1' stopColor='#F26922' />
                                </linearGradient>
                                <linearGradient id='paint2_linear' x1='0.785807' y1='0' x2='0.785807' y2='1.57161' gradientUnits='userSpaceOnUse'>
                                  <stop stopColor='#F47E3E' />
                                  <stop offset='1' stopColor='#F26922' />
                                </linearGradient>
                                <linearGradient id='paint3_linear' x1='3.7087' y1='21.8285' x2='3.7087' y2='23.4001' gradientUnits='userSpaceOnUse'>
                                  <stop stopColor='#F47E3E' />
                                  <stop offset='1' stopColor='#F26922' />
                                </linearGradient>
                                <linearGradient id='paint4_linear' x1='25.7377' y1='10.2726' x2='25.7377' y2='11.8442' gradientUnits='userSpaceOnUse'>
                                  <stop stopColor='#F47E3E' />
                                  <stop offset='1' stopColor='#F26922' />
                                </linearGradient>
                                <linearGradient id='paint5_linear' x1='1.92816' y1='16.1176' x2='1.92816' y2='17.6892' gradientUnits='userSpaceOnUse'>
                                  <stop stopColor='#F47E3E' />
                                  <stop offset='1' stopColor='#F26922' />
                                </linearGradient>
                                <linearGradient id='paint6_linear' x1='26.9504' y1='16.1176' x2='26.9504' y2='17.6892' gradientUnits='userSpaceOnUse'>
                                  <stop stopColor='#F47E3E' />
                                  <stop offset='1' stopColor='#F26922' />
                                </linearGradient>
                                <linearGradient id='paint7_linear' x1='3.03333' y1='10.2728' x2='3.03333' y2='11.8444' gradientUnits='userSpaceOnUse'>
                                  <stop stopColor='#F47E3E' />
                                  <stop offset='1' stopColor='#F26922' />
                                </linearGradient>
                                <linearGradient id='paint8_linear' x1='25.3888' y1='21.829' x2='25.3888' y2='23.4006' gradientUnits='userSpaceOnUse'>
                                  <stop stopColor='#F47E3E' />
                                  <stop offset='1' stopColor='#F26922' />
                                </linearGradient>
                                <linearGradient id='paint9_linear' x1='7.61164' y1='4.99745' x2='7.61164' y2='6.56907' gradientUnits='userSpaceOnUse'>
                                  <stop stopColor='#F47E3E' />
                                  <stop offset='1' stopColor='#F26922' />
                                </linearGradient>
                                <linearGradient id='paint10_linear' x1='14.689' y1='2.74854' x2='14.689' y2='4.32015' gradientUnits='userSpaceOnUse'>
                                  <stop stopColor='#F47E3E' />
                                  <stop offset='1' stopColor='#F26922' />
                                </linearGradient>
                                <linearGradient id='paint11_linear' x1='0.785807' y1='0' x2='0.785807' y2='1.57161' gradientUnits='userSpaceOnUse'>
                                  <stop stopColor='#F47E3E' />
                                  <stop offset='1' stopColor='#F26922' />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div className='link-content'>
                            <span className='item'>{t('p.authenticator')}</span>
                            <span className='details'>{t('p.authenticator_sub')}</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                  </div>
                  {/* Secondary Product Links */}
                  <div className='alt-focus has-cta'>
                    <ul>
                      <li>
                        <Link href='/products/chadder'>
                          <a>
                            <span className='project'>{t('p.chadder')}</span>
                            <span className='details'>{t('p.chadder_sub')}</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/products/jarz'>
                          <a>
                            <span className='project'>{t('p.jarz')}</span>
                            <span className='details'>{t('p.jarz_sub')}</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/products/confirm'>
                          <a>
                            <span className='project'>{t('p.confirm')}</span>
                            <span className='details'>{t('p.confirm_sub')}</span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* CTA */}
                  <div className='cta'>
                    <Link href='/download'><a>Download</a></Link>
                  </div>
                </ul>
              </li>
              <li className='has-sub'>
                <Link href='/solutions'><a>{t('top.solutions')}</a></Link>
                <ul>
                  {/* Main Solution Links */}
                  <div className='main-focus'>
                    <li className='main-focus'>
                      <Link href='/solutions/policy-engine'>
                        <a>
                          <div className='link-icon'>
                            <svg width='41' height='41' viewBox='0 0 41 41' fill='none' xmlns='http://www.w3.org/2000/svg'>
                              <mask id='mask0' masktype='alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='41' height='41'>
                                <circle cx='20.1162' cy='20.4854' r='20' fill='#5670AB' />
                              </mask>
                              <g mask='url(#mask0)'>
                                <circle cx='20.1162' cy='20.4854' r='20' fill='#F47E3E' />
                                <path fillRule='evenodd' clipRule='evenodd' d='M24.9838 14.5879C24.9133 11.969 24.1489 6.55957 19.8876 6.55957C15.5984 6.55957 15.1757 11.6602 15.1516 14.6144L24.9838 14.5879ZM28.0974 14.5794C28.0876 10.5495 27.8081 3.89372 19.8804 3.89389C12.1165 3.89405 12.164 10.2202 12.1957 14.4409C12.1961 14.5019 12.1966 14.5624 12.197 14.6224L9.73763 14.6291C8.63306 14.6321 7.74005 15.5299 7.74304 16.6345L7.78272 31.3105C7.7857 32.4151 8.68355 33.3081 9.78812 33.3051L30.5257 33.249C31.6303 33.246 32.5233 32.3482 32.5203 31.2436L32.4806 16.5676C32.4777 15.463 31.5798 14.57 30.4752 14.573L28.0974 14.5794ZM20.7599 24.6383C21.5129 24.373 22.0526 23.6553 22.0526 22.8115C22.0526 21.7422 21.1857 20.8753 20.1164 20.8753C19.047 20.8753 18.1801 21.7422 18.1801 22.8115C18.1801 23.6081 18.6611 24.2923 19.3485 24.5895L18.5525 26.833L21.6803 26.833L20.7599 24.6383Z' fill='#FBFCFF' />
                                <path fillRule='evenodd' clipRule='evenodd' d='M12.4636 36.4988C24.4561 36.4988 34.178 26.7769 34.178 14.7844C34.178 9.30805 32.1507 4.30519 28.8057 0.485352C36.9598 3.61163 42.7486 11.5136 42.7486 20.7677C42.7486 32.7602 33.0268 42.4821 21.0342 42.4821C14.5181 42.4821 8.67228 39.6119 4.69214 35.0667C7.10509 35.9919 9.72516 36.4988 12.4636 36.4988Z' fill='#FFC7A8' />
                              </g>
                            </svg>
                          </div>
                          <div className='link-content'>
                            <span className='item'>{t('s.policy')}</span>
                            <span className='details'>{t('s.policy_sub')}</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li className='main-focus color-authentication'>
                      <Link href='/solutions/enterprise-authentication'>
                        <a>
                          <div className='link-icon'>
                            <svg width='41' height='41' viewBox='0 0 41 41' fill='none' xmlns='http://www.w3.org/2000/svg'>
                              <mask id='mask0' masktype='alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='41' height='41'>
                                <circle cx='20.1162' cy='20.4854' r='20' fill='#5670AB' />
                              </mask>
                              <g mask='url(#mask0)'>
                                <circle cx='20.1162' cy='20.4854' r='20' fill='#5670AB' />
                                <path fillRule='evenodd' clipRule='evenodd' d='M30.2412 7.875H9.99121V37.0166H18.1162V33.4565H22.1162V37.0166H30.2412V7.875ZM15.7412 10.4375H11.7412V14.4375H15.7412V10.4375ZM18.1162 10.4375H22.1162V14.4375H18.1162V10.4375ZM28.4912 10.4375H24.4912V14.4375H28.4912V10.4375ZM11.7412 15.8604H15.7412V19.8604H11.7412V15.8604ZM22.1162 15.8604H18.1162V19.8604H22.1162V15.8604ZM24.4912 15.8604H28.4912V19.8604H24.4912V15.8604ZM15.7412 21.2834H11.7412V25.2834H15.7412V21.2834ZM18.1162 21.2834H22.1162V25.2834H18.1162V21.2834ZM28.4912 21.2834H24.4912V25.2834H28.4912V21.2834ZM11.7412 26.7065H15.7412V30.7065H11.7412V26.7065ZM22.1162 26.7065H18.1162V30.7065H22.1162V26.7065ZM28.4912 26.7065H24.4912V30.7065H28.4912V26.7065Z' fill='#FBFCFF' />
                                <path fillRule='evenodd' clipRule='evenodd' d='M12.4636 36.4988C24.4561 36.4988 34.178 26.7769 34.178 14.7844C34.178 9.30805 32.1507 4.30519 28.8057 0.485352C36.9598 3.61163 42.7486 11.5136 42.7486 20.7677C42.7486 32.7602 33.0268 42.4821 21.0342 42.4821C14.5181 42.4821 8.67228 39.6119 4.69214 35.0667C7.10509 35.9919 9.72515 36.4988 12.4636 36.4988Z' fill='#445785' />
                              </g>
                            </svg>
                          </div>
                          <div className='link-content'>
                            <span className='item'>{t('s.auth')}</span>
                            <span className='details'>{t('s.auth_sub')}</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li className='main-focus color-collection'>
                      <Link href='/solutions/collection-of-devices'>
                        <a>
                          <div className='link-icon'>
                            <svg width='41' height='41' viewBox='0 0 41 41' fill='none' xmlns='http://www.w3.org/2000/svg'>
                              <mask id='mask0' masktype='alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='41' height='41'>
                                <circle cx='20.1162' cy='20.4854' r='20' fill='#5670AB' />
                              </mask>
                              <g mask='url(#mask0)'>
                                <circle cx='20.1162' cy='20.4854' r='20' fill='#5FBA85' />
                                <path d='M27.5447 44.651H12.6879C11.5122 44.651 10.5503 43.6891 10.5503 42.5134L10.5503 13.2275C10.5503 12.0518 11.5122 11.0898 12.6879 11.0898L27.5447 11.0898C28.7204 11.0898 29.6823 12.0518 29.6823 13.2275L29.6823 42.5134C29.6823 43.6891 28.7204 44.651 27.5447 44.651Z' fill='#FBFCFF' stroke='#53A575' strokeWidth='2' strokeMiterlimit='10' />
                                <path d='M25.4598 11.9983V12.01L25.4605 12.0217C25.4991 12.6385 25.0003 13.1197 24.3919 13.1197H16.1084C15.5139 13.1197 15.0405 12.6463 15.0405 12.0518C15.0405 11.3948 15.5228 10.9304 16.1084 10.9304H24.3919C24.9864 10.9304 25.4598 11.4038 25.4598 11.9983Z' fill='#53A575' stroke='#53A575' strokeWidth='0.75' />
                                <path fillRule='evenodd' clipRule='evenodd' d='M12.4634 36.4986C24.4559 36.4986 34.1778 26.7767 34.1778 14.7842C34.1778 9.30781 32.1505 4.30495 28.8055 0.485107C36.9595 3.61139 42.7484 11.5134 42.7484 20.7674C42.7484 32.7599 33.0265 42.4818 21.034 42.4818C14.5178 42.4818 8.67203 39.6116 4.69189 35.0665C7.10485 35.9916 9.72493 36.4986 12.4634 36.4986Z' fill='#53A575' />
                              </g>
                            </svg>
                          </div>
                          <div className='link-content'>
                            <span className='item'>{t('s.collection')}</span>
                            <span className='details'>{t('s.collection_sub')}</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li className='main-focus color-drt'>
                      <Link href='/solutions/dual-roots-of-trust'>
                        <a>
                          <div className='link-icon'>
                            <svg width='41' height='41' viewBox='0 0 41 41' fill='none' xmlns='http://www.w3.org/2000/svg'>
                              <mask id='mask0' masktype='alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='41' height='41'>
                                <circle cx='20.1162' cy='20.4854' r='20' fill='#5670AB' />
                              </mask>
                              <g mask='url(#mask0)'>
                                <circle cx='20.1162' cy='20.4854' r='20' fill='#75BEF5' />
                                <path fillRule='evenodd' clipRule='evenodd' d='M21.7725 7.19015C21.7205 7.18904 21.6684 7.18848 21.6162 7.18848C17.6639 7.18848 14.46 10.3924 14.46 14.3447C14.46 17.5124 16.5181 20.1993 19.37 21.1414L17.46 24.0322H20.3975V26.5322L18.8975 27.9072L20.8975 29.8447L19.2725 31.6572V32.7197L20.8975 34.5947L19.7725 35.9697L19.7725 37.7197L21.7725 39.2822L21.7725 21.4993V20.5322L21.7725 12.2809C21.094 12.1371 20.585 11.5347 20.585 10.8135C20.585 10.0922 21.094 9.48985 21.7725 9.34608V7.19015Z' fill='#FBFCFF' />
                                <path fillRule='evenodd' clipRule='evenodd' d='M12.4636 36.4988C24.4561 36.4988 34.178 26.7769 34.178 14.7844C34.178 9.30805 32.1507 4.30519 28.8057 0.485352C36.9598 3.61163 42.7486 11.5136 42.7486 20.7677C42.7486 32.7602 33.0268 42.4821 21.0342 42.4821C14.5181 42.4821 8.67228 39.6119 4.69214 35.0667C7.10509 35.9919 9.72515 36.4988 12.4636 36.4988Z' fill='#5F98C3' />
                              </g>
                            </svg>
                          </div>
                          <div className='link-content'>
                            <span className='item'>{t('s.drt')}</span>
                            <span className='details'>{t('s.drt_sub')}</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li className='main-focus color-services'>
                      <Link href='/solutions/professional-services'>
                        <a>
                          <div className='link-icon'>
                            <svg width='41' height='41' viewBox='0 0 41 41' fill='none' xmlns='http://www.w3.org/2000/svg'>
                              <mask id='mask0' masktype='alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='41' height='41'>
                                <circle cx='20.1162' cy='20.4854' r='20' fill='#5670AB' />
                              </mask>
                              <g mask='url(#mask0)'>
                                <circle cx='20.1162' cy='20.4854' r='20' fill='#F4B186' />
                                <path fillRule='evenodd' clipRule='evenodd' d='M40.7314 42.0576C40.7314 42.2058 40.7298 42.3536 40.7266 42.501H34.6087C34.2007 40.5758 32.4913 39.1312 30.4446 39.1312C28.3978 39.1312 26.6884 40.5758 26.2805 42.501L0.120956 42.501C0.117798 42.3536 0.116211 42.2058 0.116211 42.0576C0.116211 30.842 9.20822 21.75 20.4238 21.75C31.6394 21.75 40.7314 30.842 40.7314 42.0576Z' fill='#FBFCFF' />
                                <path fillRule='evenodd' clipRule='evenodd' d='M19.8838 22L18.8438 23.8125L19.3238 25.1875H19.4438L17.9238 34.4375L20.0038 38.125L22.9238 34.4375L21.4438 25.1875H21.5638L22.1238 23.8125L21.0038 22H19.8838Z' fill='#F47E3E' />
                                <path d='M18.8438 23.8125L18.4101 23.5637L18.2965 23.7617L18.3718 23.9773L18.8438 23.8125ZM19.8838 22V21.5H19.5943L19.4501 21.7512L19.8838 22ZM19.3238 25.1875L18.8518 25.3523L18.9688 25.6875H19.3238V25.1875ZM19.4438 25.1875L19.9372 25.2686L20.0327 24.6875H19.4438V25.1875ZM17.9238 34.4375L17.4304 34.3564L17.4019 34.53L17.4883 34.6831L17.9238 34.4375ZM20.0038 38.125L19.5683 38.3706L19.9339 39.0187L20.3958 38.4354L20.0038 38.125ZM22.9238 34.4375L23.3158 34.7479L23.4523 34.5756L23.4175 34.3585L22.9238 34.4375ZM21.4438 25.1875V24.6875H20.8575L20.9501 25.2665L21.4438 25.1875ZM21.5638 25.1875V25.6875H21.9001L22.0269 25.3761L21.5638 25.1875ZM22.1238 23.8125L22.5869 24.0011L22.6827 23.7658L22.5492 23.5497L22.1238 23.8125ZM21.0038 22L21.4292 21.7372L21.2826 21.5H21.0038V22ZM19.2775 24.0613L20.3175 22.2488L19.4501 21.7512L18.4101 23.5637L19.2775 24.0613ZM19.7959 25.0227L19.3159 23.6477L18.3718 23.9773L18.8518 25.3523L19.7959 25.0227ZM19.4438 24.6875H19.3238V25.6875H19.4438V24.6875ZM18.4172 34.5186L19.9372 25.2686L18.9504 25.1064L17.4304 34.3564L18.4172 34.5186ZM20.4393 37.8794L18.3593 34.1919L17.4883 34.6831L19.5683 38.3706L20.4393 37.8794ZM22.5318 34.1271L19.6118 37.8146L20.3958 38.4354L23.3158 34.7479L22.5318 34.1271ZM20.9501 25.2665L22.4301 34.5165L23.4175 34.3585L21.9375 25.1085L20.9501 25.2665ZM21.5638 24.6875H21.4438V25.6875H21.5638V24.6875ZM21.6608 23.6239L21.1008 24.9989L22.0269 25.3761L22.5869 24.0011L21.6608 23.6239ZM20.5785 22.2628L21.6985 24.0753L22.5492 23.5497L21.4292 21.7372L20.5785 22.2628ZM19.8838 22.5H21.0038V21.5H19.8838V22.5Z' fill='#F47E3E' />
                                <circle cx='20.4238' cy='13.75' r='8.1875' fill='#FBFCFF' />
                                <path fillRule='evenodd' clipRule='evenodd' d='M12.4636 36.4988C24.4561 36.4988 34.178 26.7769 34.178 14.7844C34.178 9.30805 32.1507 4.30519 28.8057 0.485352C36.9598 3.61163 42.7486 11.5136 42.7486 20.7677C42.7486 32.7602 33.0268 42.4821 21.0342 42.4821C14.5181 42.4821 8.67228 39.6119 4.69214 35.0667C7.10509 35.9919 9.72515 36.4988 12.4636 36.4988Z' fill='#EE9257' />
                              </g>
                            </svg>

                          </div>
                          <div className='link-content'>
                            <span className='item'>{t('s.services')}</span>
                            <span className='details'>{t('s.services_sub')}</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                  </div>
                  {/* Secondary Solution Links */}
                  <div className='alt-focus is-split'>
                    <h4>{t('s.wp')}</h4>
                    <ul>
                      <li>
                        <a href='https://api.rivetz.com/pdf/rvt-white-paper-v1.02.pdf' target='_blank'>
                          <a>
                            <span>{t('s.wp-rvt')}</span>
                          </a>
                        </a>
                      </li>
                      <li>
                        <a href='https://api.rivetz.com/pdf/dualroots_whitepaper.pdf' target='_blank'>
                          <a>
                            <span>{t('s.wp-drt')}</span>
                          </a>
                        </a>
                      </li>
                      <li>
                        <a href='https://api.rivetz.com/pdf/libra_calibra_whitepaper.pdf' target='_blank'>
                          <a>
                            <span>{t('s.wp-libra')}</span>
                          </a>
                        </a>
                      </li>
                      <li>
                        <a href='https://api.rivetz.com/pdf/prodsheet_toolkit.pdf' target='_blank'>
                          <a>
                            <span>{t('s.wp-toolkit')}</span>
                          </a>
                        </a>
                      </li>
                      <li>
                        <a href='https://api.rivetz.com/pdf/disc_whitepaper.pdf' target='_blank'>
                          <a>
                            <span>{t('s.wp-payments')}</span>
                          </a>
                        </a>
                      </li>
                      <li>
                        <a href='https://api.rivetz.com/pdf/prodsheet_confirm.pdf' target='_blank'>
                          <a>
                            <span>{t('s.wp-confirm')}</span>
                          </a>
                        </a>
                      </li>
                    </ul>
                  </div>
                </ul>
              </li>
              <li className='has-sub'>
                <Link href='https://developer.rivetz.com/?ref=com'><a>{t('top.developers')}</a></Link>
                <ul>
                  {/* Main Documentation Links */}
                  <div className='main-focus extra-pad'>
                    <li className='main-focus'>
                      <Link href='/network'>
                        <a className='hover-darken'>
                          <div className='link-content' style={{ 'marginLeft': 'auto' }}>
                            <span className='item'>{t('d.docs')}</span>
                            <span className='details'>{t('d.docs_sub')}</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                  </div>
                  {/* Split Documentation Links */}
                  <div className='split-focus'>
                    <div className='focus-column'>
                      <ul>
                        <li className='emphasis'><a href='https://developer.rivetz.com/docs/v1.0/getting-started' target='_blank' rel='noreferrer'><span>{t('d.start')}</span></a></li>
                        <li><a href='https://developer.rivetz.com/docs/v1.0/overview' target='_blank' rel='noreferrer'><span>{t('d.start-overview')}</span></a></li>
                        <li><a href='http://sdk.developer.rivetz.com/rivetz-api/index.html' target='_blank' rel='noreferrer'><span>{t('d.start-full')}</span></a></li>
                      </ul>
                    </div>
                    <div className='focus-column'>
                      <ul>
                        <li className='emphasis'><span>{t('d.quick')}</span></li>
                        <li><span>Available Soon!</span></li>
                      </ul>
                    </div>
                  </div>
                  {/* Developer Community Link */}
                  <div className='alt-focus is-block'>
                    <a href='https://discourse.rivetz.com/?ref=com' target='_blank' rel='noreferrer'>
                      <span className='item'>{t('d.community')}</span>
                      <span className='details'>{t('d.community_sub')}</span>
                    </a>
                  </div>
                </ul>
              </li>
              <li className='has-sub'>
                <Link href='/community'><a>{t('top.community')}</a></Link>
                <ul>
                  {/* Community Hub Link */}
                  <div className='alt-focus is-block is-community'>
                    <Link href='/community'>
                      <a>
                        <span className='item'>{t('c.head')}</span>
                        <span className='details'>{t('c.sub')}</span>
                      </a>
                    </Link>
                  </div>
                  <div className='alt-focus is-block is-social'>
                    <h5>{t('c.social')}</h5>
                    <SocialNav scrollspy={false} />
                  </div>
                </ul>
              </li>
              <li className='has-sub'>
                <Link href='/team'><a>{t('top.company')}</a></Link>
                <ul className='has-single'>
                  <div className='single-links'>
                    <div className='key key-octagon'>
                      <svg width='76' height='333' viewBox='0 0 76 333' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <g opacity='0.05'>
                          <path d='M75.6154 154.787V116.112H55.3227V154.787L46.7204 164.776L55.3227 175.431V332.714H75.6154V175.431L83.1148 164.776L75.6154 154.787Z' fill='#F6AB52' />
                          <rect width='26.4771' height='13.2344' transform='matrix(-1 0 0 1 64.9175 319.48)' fill='#F6AB52' />
                          <rect width='18.1972' height='13.2344' transform='matrix(-1 0 0 1 64.9173 266.543)' fill='#F6AB52' />
                          <rect width='38.4771' height='13.2344' transform='matrix(-1 0 0 1 64.9175 293.011)' fill='#F6AB52' />
                          <path fillRule='evenodd' clipRule='evenodd' d='M20.4404 106.385L0.656311 64.645L20.4404 18.3848L64.9165 0.384766L114.44 18.3848L129.177 64.645L114.44 106.385L64.9165 128.905L20.4404 106.385ZM30.0385 97.3768L14.524 64.645L30.0385 28.3683L64.9161 14.2529L103.752 28.3683L115.308 64.645L103.752 97.3768L64.9161 115.037L30.0385 97.3768Z' fill='#F6AB52' />
                        </g>
                      </svg>
                    </div>
                    <div className='key key-diamond'>
                      <svg width='283' height='319' viewBox='0 0 283 319' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <g opacity='0.05'>
                          <path d='M139.182 143.648L110.484 117.722L96.881 132.78L125.579 158.706L127.225 171.786L140.898 172.545L257.607 277.982L271.21 262.924L154.501 157.487L151.622 144.78L139.182 143.648Z' fill='#F4B186' />
                          <rect width='18.1972' height='13.2344' transform='matrix(-0.670364 0.742033 0.742033 0.670364 254.219 261.99)' fill='#F4B186' />
                          <rect width='18.1972' height='13.2344' transform='matrix(-0.670364 0.742033 0.742033 0.670364 214.938 226.504)' fill='#F4B186' />
                          <rect width='31.7625' height='13.2344' transform='matrix(-0.670364 0.742033 0.742033 0.670364 234.578 244.247)' fill='#F4B186' />
                          <path fillRule='evenodd' clipRule='evenodd' d='M112.806 134.236L22.045 138.842L17.4396 48.0807L108.2 43.4753L112.806 134.236ZM98.9186 121.69L95.6545 57.3624L31.3267 60.6266L34.5908 124.954L98.9186 121.69Z' fill='#F4B186' />
                        </g>
                      </svg>
                    </div>
                    <ul>
                      {/* <li><Link href="/mission"><a>{t('co.mission')}</a></Link></li>
                      <li><Link href="/history"><a>{t('co.history')}</a></Link></li> */}
                      <li><Link href='/partners'><a>{t('co.partner')}</a></Link></li>
                      <li><Link href='/team'><a>{t('co.team')}</a></Link></li>
                      <li><Link href='/careers'><a>{t('co.careers')}</a></Link></li>
                      <li><Link href='/contact'><a>{t('co.contact')}</a></Link></li>
                    </ul>
                  </div>
                  <div className='alt-focus is-blog'>
                    <h4>{t('co.blog')}</h4>
                    <a className='blog-link' href={this.state.blog.url} target='_blank'>{this.state.blog.title}</a>
                    <Link href='https://blog.rivetz.com'><a target='_blank' className='blog-more'>{t('common:more')}...</a></Link>
                  </div>
                </ul>
              </li>
              <li className='emphasis'><a href='/download'>{t('top.download')}</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

Navigation.propTypes = {
  t: PropTypes.func.isRequired
}

export default withNamespaces('common')(Navigation)
