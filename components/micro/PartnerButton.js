import React from 'react'
import PropTypes from 'prop-types'
import { withNamespaces } from '../../i18n'
import Link from 'next/link' // eslint-disable-line

class PartnerButton extends React.Component {
  static async getInitialProps () {
    return { // Return obj
      namespacesRequired: ['common']
    }
  }

  render () {
    const { t } = this.props
    const extraClass = (this.props.extraClass ? this.props.extraClass : null)
    const program = (this.props.program ? this.props.program : null)
    return (
      <Link href='/partners'>
        <a className={extraClass || null}>
          {(program ? t('partner-program') : t('partner'))}
        </a>
      </Link>
    )
  }
}

PartnerButton.propTypes = {
  t: PropTypes.func.isRequired,
  extraClass: PropTypes.string,
  program: PropTypes.string
}

export default withNamespaces(['common'])(PartnerButton)
