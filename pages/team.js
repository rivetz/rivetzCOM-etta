import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { Link, withNamespaces } from '../i18n'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Parser from 'html-react-parser'
import axios from 'axios'

// import Link from 'next/link'
import LayoutGeneric from '../components/layouts/Generic'

class Team extends React.Component {
  constructor () {
    super()
    this.state = {
      team: [],
      board: [],
      expandMember: false,
      expandMemberIndex: 0,
      expandMemberData: [],
      nextMemberName: '',
      filterVisibility: 'all'
    }
    this.changeFilter = this.changeFilter.bind(this)
    this.memberExpand = this.memberExpand.bind(this)
    this.memberShrink = this.memberShrink.bind(this)
    this.nextMember = this.nextMember.bind(this)
    this.getNextMember = this.getNextMember.bind(this)
  }
  // Called from server (page refresh) & client (client nav)
  static async getInitialProps () {
    return {
      // Return obj
      namespacesRequired: ['team', 'common']
    }
  }

  changeFilter (target = 'all') {
    this.setState({ filterVisibility: target })
  }

  memberExpand = (member, index) => {
    console.log('Expanding info for ' + member.firstName)

    // Get next member:
    let memberCount = this.state.team.length - 1
    let nextItem = index + 1
    if (nextItem > memberCount) {
      nextItem = 0
    } else if (nextItem < 0) {
      nextItem = 1
    }

    this.setState({
      expandMemberData: member,
      expandMember: true,
      expandMemberIndex: index,
      nextMemberName: this.state.team[nextItem]['firstName']
    })
  }

  getNextMember = () => {
    let memberCount = this.state.team.length - 1
    let nextItem = this.state.expandMemberIndex + 2
    if (nextItem > memberCount) {
      nextItem = 0
    } else if (nextItem < 0) {
      nextItem = memberCount
    }

    this.setState({
      nextMemberName: this.state.team[nextItem]['firstName']
    })

    console.log(this.state.nextMemberName)
  }

  nextMember = (modifier = 1) => {
    console.log('Current index is ' + this.state.expandMemberIndex)

    let memberCount = this.state.team.length - 1

    let nextItem = this.state.expandMemberIndex + modifier

    if (nextItem > memberCount) {
      nextItem = 0
    } else if (nextItem < 0) {
      nextItem = memberCount
    }
    this.setState({
      expandMemberData: this.state.team[nextItem],
      expandMember: true,
      expandMemberIndex: nextItem
    })

    this.getNextMember()

    return true
  }

  memberShrink = () => {
    this.setState({
      expandMember: false,
      expandMemberData: [],
      expandMemberIndex: 0
    })
  }

  componentDidMount () {
    window.scrollTo(0, 0) // Force page to jump to the top

    // Fetch Team
    axios
      .get('//api.rivetz.com/team')
      .then(({ data }) => {
        console.log(data)
        this.setState({ team: data })
      })
      .then(team => {
        // Nothing to do here
      })
      .catch(err => console.log(err))

    // Fetch Board & Advisors
    axios
      .get('//api.rivetz.com/board-advisors')
      .then(({ data }) => {
        console.log(data)
        this.setState({ board: data })
      })
      .then(board => {
        // Nothing else to do here
      })
      .catch(err => console.log(err))
  }

  render () {
    const { t } = this.props
    return (
      <LayoutGeneric>
        <Head>
          <title>Rivetz - {t('common:site-slogan')}</title>
          <meta name='description' content={t('common:site-description')} />
          <meta name='canonical' content={'https://rivetz.com/'} />

          <meta
            itemProp='name'
            content={'Rivetz - ' + t('common:site-slogan')}
          />
          <meta itemProp='description' content={t('common:site-description')} />
          <meta itemProp='image' content='/static/logo/250px.png' />
          <meta
            name='og:title'
            content={'Rivetz - ' + t('common:site-slogan')}
          />
          <meta name='og:description' content={t('common:site-description')} />
          <meta name='og:image' content='/static/logo/250px.png' />
          <meta name='og:url' content={'https://developer.rivetz.com/'} />
          <meta name='og:site_name' content='Rivetz' />
          <meta name='og:type' content='website' />
          <meta name='twitter:card' content='summary' />
          <meta
            name='twitter:title'
            content={'Rivetz - ' + t('common:site-slogan')}
          />
          <meta
            name='twitter:description'
            content={t('common:site-description')}
          />
          <meta name='twitter:site' content='@RivetzCorp' />
          <meta name='twitter:image:src' content='/static/logo/250px.png' />

          <link rel='stylesheet' href='/static/css/team.css' />
        </Head>

        {/* Page Section: Hero */}
        <div className='uk-section-large page-section section-intro'>
          <div
            className='uk-container uk-container-large uk-grid-collapse'
            data-uk-grid
          >
            <div className='uk-width-1-1@xs uk-width-1-2@l'>
              <div className='section-content'>
                <div
                  className='section-announce'
                  data-uk-scrollspy='cls: uk-animation-slide-bottom-medium'
                >
                  <h3>{t('hero.announce')}</h3>
                </div>
                <div
                  className='section-head'
                  data-uk-scrollspy='cls: uk-animation-slide-bottom-medium'
                >
                  <h1>{t('hero.header')}</h1>
                </div>
                <div
                  className='section-details'
                  data-uk-scrollspy='cls: uk-animation-slide-bottom-medium'
                >
                  <p>{t('hero.details')}</p>
                </div>
              </div>

              <div className='section-buttons'>
                <Link href='#current'>
                  <a data-uk-scroll='offset: 100;'>{t('hero.cta')}</a>
                </Link>
                <Link href='/careers'>
                  <a className='off-color' data-uk-scroll='offset: 100;'>
                    {t('hero.work')}
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div
            className='illustration uk-visible@l steven'
            data-uk-scrollspy='cls: uk-animation-slide-right-medium; repeat: true'
          >
            <div className='uk-overlay uk-dark uk-overlay-default uk-position-bottom-left'>
              <p>
                Rivetz CEO Steven Sprague speaking at DC Blockchain Summit 2018.
              </p>
            </div>
            <img src='/static/img/team/steven_dc.jpg' className='ill-hero' />
          </div>
        </div>

        {/* Page Section: Browse Team */}
        <div className='uk-section-large page-section section-team-list'>
          <div className='uk-container uk-text-center'>
            <div id='current' className='tabs is-medium teamSelect'>
              <ul className='uk-flex-center' id='teamFilter' data-uk-tab>
                <li
                  className='uk-active'
                  onClick={e => {
                    this.changeFilter()
                  }}
                >
                  <a>All</a>
                </li>
                <li
                  onClick={e => {
                    this.changeFilter('product')
                  }}
                >
                  <a>Product</a>
                </li>
                <li
                  onClick={e => {
                    this.changeFilter('engineering')
                  }}
                >
                  <a>Engineering</a>
                </li>
                <li
                  onClick={e => {
                    this.changeFilter('busdev')
                  }}
                >
                  <a>Business Development</a>
                </li>
                <li>
                  <a
                    href='#board-advisors'
                    data-uk-scroll={'duration: 500; offset: 120;'}
                  >
                    Board &amp; Advisors
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='uk-container'>
            <div
              className='team-members uk-child-width-1-1@xs uk-child-width-1-4@l'
              data-uk-scrollspy='target: > div; cls: uk-animation-slide-bottom-small'
              data-uk-grid
            >
              {this.state.team.map((person, index) => {
                let tagsClasses = 'team-member is-visible '
                person.tags.map((tag, index) => {
                  if (tag) tagsClasses += ' is-' + tag + ' '
                  return true
                })

                let visibility = this.state.filterVisibility
                visibility = visibility.replace('is-', '')

                if (person.tags.includes(visibility) || visibility === 'all') {
                  return (
                    <div
                      className={tagsClasses}
                      key={index}
                      onClick={e => this.memberExpand(person, index)}
                    >
                      <TeamMember
                        person={person}
                        key={index}
                        index={index}
                        visibility={this.state.filterVisibility}
                      />
                    </div>
                  )
                } else {
                  return null
                }
              })}
            </div>
          </div>

          <div className='uk-container' id='board-advisors'>
            <h3 className='uk-text-center'>Board & Advisors</h3>
            <div
              className='team-members is-board-advisors uk-child-width-1-1@xs uk-child-width-1-4@l'
              data-uk-scrollspy='target: > div; delay: 120; cls: uk-animation-slide-bottom-small'
              data-uk-grid
            >
              {this.state.board.map((person, index) => {
                let tagsClasses = 'team-member is-visible '
                person.tags.map((tag, index) => {
                  if (tag) tagsClasses += ' is-' + tag + ' '
                  return true
                })

                // let visibility = this.state.filterVisibility
                // visibility = visibility.replace('is-', '')

                return (
                  <div
                    className={tagsClasses}
                    key={index}
                    onClick={e => this.memberExpand(person, index)}
                  >
                    <TeamMember
                      person={person}
                      key={index}
                      index={index}
                      visibility={this.state.filterVisibility}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <TeamModal
          visibility={this.state.expandMember}
          person={this.state.expandMemberData}
          close={this.memberShrink}
          nextMember={this.nextMember}
          nextMemberName={this.state.nextMemberName}
        />
      </LayoutGeneric>
    )
  }
}

const TeamMember = ({ person, index, visibility }) => {
  return (
    <div className='team-member-inner'>
      <div className='member-image'>
        <div className='member-image'>
          <img
            src={
              '/static/img/team/' +
              person.firstName.toLowerCase() +
              '-' +
              person.lastName.toLowerCase() +
              '-min.jpg'
            }
            alt={person.firstName + ' ' + person.lastName + ' - Rivetz Team'}
          />
        </div>
        <div className='member-info'>
          <h3 className='name'>
            {person.firstName} {person.lastName}
          </h3>
          <h4 className='jobTitle'>{person.title}</h4>
        </div>
      </div>
    </div>
  )
}

const TeamModal = ({
  visibility,
  person,
  nextMember,
  close,
  nextMemberName
}) => {
  let socialItems

  if (!person.social) {
    socialItems = []
  } else {
    socialItems = person.social
  }

  if (visibility) {
    return (
      <div id='teamModal' className='uk-animation-scale-down'>
        <div className='memberInner'>
          <div className='uk-container' data-uk-grid>
            <div className='uk-width-1-1@xs uk-width-1-3@m'>
              <div className='memberPhoto uk-animation-slide-left'>
                <img
                  src={
                    '/static/img/team/' +
                    person.firstName.toLowerCase() +
                    '-' +
                    person.lastName.toLowerCase() +
                    '-min.jpg'
                  }
                  alt={person.firstName + ' ' + person.lastName}
                />
              </div>
              <div className='socialLinks'>
                {socialItems.map((link, index) => {
                  let tooltip = 'title: ' + link.n
                  return (
                    <li key={index}>
                      <a
                        href={link.url}
                        title={link.n}
                        uk-tooltip={tooltip}
                        target='_blank'
                      >
                        <FontAwesomeIcon icon={['fab', link.n]} />
                      </a>
                    </li>
                  )
                })}
              </div>
            </div>
            <div className='uk-width-expand'>
              <div className='memberBio'>
                <h2>About {person.firstName}</h2>
                <h4 className='jobTitle'>{person.title}</h4>
                <div className='bioDesc'>{Parser(person.bio)}</div>
              </div>
            </div>
          </div>

          <div className='navOptions'>
            <hr />
            <div onClick={e => nextMember(-1)} className='navOption is-left'>
              <FontAwesomeIcon icon={['far', 'angle-left']} /> Prev
            </div>
            <div onClick={e => close()} className='navOption is-close'>
              <FontAwesomeIcon icon={['far', 'times']} />
            </div>
            <div onClick={e => nextMember()} className='navOption is-right'>
              Next: {nextMemberName}{' '}
              <FontAwesomeIcon icon={['far', 'angle-right']} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
}

Team.propTypes = {
  t: PropTypes.func.isRequired
}

export default withNamespaces(['team', 'common'])(Team)
