import React from 'react'
import PropTypes from 'prop-types'
import { withNamespaces } from '../../i18n'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SocialNav extends React.Component {
  static async getInitialProps () {
    return { // Return obj
      namespacesRequired: ['common']
    }
  }

  enableScrollspy = (enable = true) => {
    if (enable) return 'target: > li; delay: 300; cls: uk-animation-slide-bottom-small'
    return 'hidden: false, cls: none'
  }

  scrollspyClass = (enable = true) => {
    if (enable) return 'social-nav'
    return 'social-nav uk-scrollspy-inview'
  }

  render () {
    return (
      <ul className={this.scrollspyClass(this.props.scrollspy)} data-uk-scrollspy={this.enableScrollspy(this.props.scrollspy)} >
        <li>
          <a href='https://t.me/rivetz_official' target='_blank' title='Telegram'>
            <FontAwesomeIcon fixedWidth icon={['fab', 'telegram-plane']} />
          </a>
        </li>
        <li>
          <a href='https://www.youtube.com/channel/UC5mbk0LwtfOwuK1h-TFPCOw/featured' target='_blank' title='YouTube'>
            <FontAwesomeIcon fixedWidth icon={['fab', 'youtube']} />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/company/rivetz/' target='_blank' title='LinkedIn'>
            <FontAwesomeIcon fixedWidth icon={['fab', 'linkedin']} />
          </a>
        </li>
        <li>
          <a href='https://blog.rivetz.com/' target='_blank' title='Medium'>
            <FontAwesomeIcon fixedWidth icon={['fab', 'medium']} />
          </a>
        </li>
        <li>
          <a href='https://flipboard.com/@Rivetz' target='_blank' title='Flipboard'>
            <FontAwesomeIcon fixedWidth icon={['fab', 'flipboard']} />
          </a>
        </li>
        <li>
          <a href='https://discordapp.com/invite/VNrDBUV' target='_blank' title='Discord'>
            <FontAwesomeIcon fixedWidth icon={['fab', 'discord']} />
          </a>
        </li>
        <li>
          <a href='https://www.facebook.com/Rivetz-1409224065995167' target='_blank' title='Facebook'>
            <FontAwesomeIcon fixedWidth icon={['fab', 'facebook-f']} />
          </a>
        </li>
        <li>
          <a href='https://twitter.com/rivetzcorp' target='_blank' title='Twitter'>
            <FontAwesomeIcon fixedWidth icon={['fab', 'twitter']} />
          </a>
        </li>
        <li>
          <a href='https://www.reddit.com/r/Rivetz/' target='_blank' title='Reddit'>
            <FontAwesomeIcon fixedWidth icon={['fab', 'reddit-alien']} />
          </a>
        </li>
      </ul>
    )
  }
}

SocialNav.propTypes = {
  t: PropTypes.func.isRequired,
  scrollspy: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.bool
  ])
}

export default withNamespaces('common')(SocialNav)
