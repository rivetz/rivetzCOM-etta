import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { withNamespaces } from '../i18n'

import LayoutGeneric from '../components/layouts/Generic'

class Products extends React.Component {
  // Called from server (page refresh) & client (client nav)
  static async getInitialProps () {
    return { // Return obj
      namespacesRequired: ['common']
    }
  }

  render () {
    const { t } = this.props
    return (
      <LayoutGeneric>

        <Head>
          <title>{t('topnav.products')} - Rivetz</title>
          <meta name='description' content={t('site-description')} />
          <meta name='canonical' content={'https://developer.rivetz.com/'} />

          <meta itemProp='name' content='Rivetz - Protect Your Digital Assets' />
          <meta itemProp='description' content='The Rivetz Network secures sensitive information and provides a simpler and safer experience for all.' />
          <meta itemProp='image' content='/static/logo/250px.png' />
          <meta name='og:title' content='Rivetz - Protect Your Digital Assets' />
          <meta name='og:description' content='The Rivetz Network secures sensitive information and provides a simpler and safer experience for all.' />
          <meta name='og:image' content='/static/logo/250px.png' />
          <meta name='og:url' content={'https://developer.rivetz.com/'} />
          <meta name='og:site_name' content='Rivetz' />
          <meta name='og:type' content='website' />
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:title' content='Rivetz - Protect Your Digital Assets' />
          <meta name='twitter:description' content='The Rivetz Network secures sensitive information and provides a simpler and safer experience for all.' />
          <meta name='twitter:site' content='@RivetzCorp' />
          <meta name='twitter:image:src' content='/static/logo/250px.png' />

          <link rel='stylesheet' href='/static/css/main.css' />
          <link rel='stylesheet' href='/static/css/index.css' />

        </Head>

        <div className='uk-section-large section-home-intro'>
          <div className='uk-container' />
        </div>

      </LayoutGeneric>
    )
  }
}

Products.propTypes = {
  t: PropTypes.func.isRequired
}

export default withNamespaces('common')(Products)
