import React from 'react'
import PropTypes from 'prop-types'
import { withNamespaces } from '../../i18n'

class DeveloperToolsButton extends React.Component {
  static async getInitialProps () {
    return { // Return obj
      namespacesRequired: ['common']
    }
  }

  render () {
    const { t } = this.props
    const extraClass = (this.props.extraClass ? this.props.extraClass : null)
    return (
      <a href='https://developer.rivetz.com/?ref=com' target='_blank' rel='noreferrer' className={extraClass}>
        {t('dev-tools')}
      </a>
    )
  }
}

DeveloperToolsButton.propTypes = {
  t: PropTypes.func.isRequired,
  extraClass: PropTypes.string
}

export default withNamespaces(['common'])(DeveloperToolsButton)
