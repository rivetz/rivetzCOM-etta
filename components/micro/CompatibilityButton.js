import React from 'react'
import PropTypes from 'prop-types'
import { withNamespaces } from '../../i18n'
import Link from 'next/link' // eslint-disable-line

class CompatibilityButton extends React.Component {
  static async getInitialProps () {
    return { // Return obj
      namespacesRequired: ['common']
    }
  }

  render () {
    const { t } = this.props
    const extraClass = (this.props.extraClass ? this.props.extraClass : null)
    return (
      <Link href='/compatibility'>
        <a className={extraClass}>
          {t('compatibility')}
        </a>
      </Link>
    )
  }
}

CompatibilityButton.propTypes = {
  t: PropTypes.func.isRequired,
  extraClass: PropTypes.string
}

export default withNamespaces(['common'])(CompatibilityButton)
