import React from 'react'
import PropTypes from 'prop-types'
import { withNamespaces } from '../../i18n'
import Link from 'next/link' // eslint-disable-line
import wpContent from '../../static/locales/en/papers.json'

class WhitePapers extends React.Component {
  static async getInitialProps () {
    return { // Return obj
      namespacesRequired: ['papers', 'common']
    }
  }

  enableScrollspy = (enable = true) => {
    if (enable) return 'target: > li; delay: 300; cls: uk-animation-slide-bottom-small'
    return 'hidden: false, cls: none'
  }

  scrollspyClass = (enable = true) => {
    if (enable) return 'papers-list'
    return 'papers-list uk-scrollspy-inview'
  }

  render () {
    const { t } = this.props
    return (
      <div>
        <ul className={this.scrollspyClass(this.props.scrollspy)} data-uk-scrollspy={this.enableScrollspy(this.props.scrollspy)}>
          {Object.keys(wpContent).map((item, index) => (
            <li key={index} title={t(`${item}.title`)}>
              <Link href={t(`${item}.url`)}>
                <a target='_blank'>
                  <img src={'/static/img/papers/' + item + '.jpg'} />
                </a>
              </Link>
              <span>{t(`${item}.quick-title`)}</span>
            </li>
          ))}
        </ul>
      </div>

    )
  }
}

WhitePapers.propTypes = {
  t: PropTypes.func.isRequired,
  scrollspy: PropTypes.func
}

export default withNamespaces(['papers', 'common'])(WhitePapers)
