import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { withNamespaces } from '../i18n'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'

import PartnerButton from '../components/micro/PartnerButton'

// import Link from 'next/link'
import LayoutGeneric from '../components/layouts/Generic'

class Compatibility extends React.Component {
  constructor () {
    super()
    this.state = {
      devices: [],
      search: '',
      results: 0,
      version: '1.0'
    }
    this.searchDevices = this.searchDevices.bind(this)
    this.clearSearch = this.clearSearch.bind(this)
  }

  searchDevices (event) {
    let searchString = event.target.value
    this.setState({
      search: searchString
    })
  }

  clearSearch () {
    this.setState({
      search: ''
    })
  }

  // Called from server (page refresh) & client (client nav)
  static async getInitialProps () {
    return { // Return obj
      namespacesRequired: ['compatibility', 'common']
    }
  }

  componentDidMount () {
    // Fetch Compat List
    axios.get('//api.rivetz.com/device-compatibility')
      .then(({ data }) => {
        data.sort(function (a, b) {
          return a.oem.localeCompare(b.oem)
        })
        this.setState({ devices: data })
      })
      .then(devices => {
        // Nothing to do here
        this.clearSearch()
      })
      .catch(err => console.log(err))
  }

  render () {
    const { t } = this.props
    const currentURL = '/compatibility'

    let pageSearchClass = 'reset-search'
    if (this.state.search.length > 0) pageSearchClass = 'reset-search is-visible'

    return (
      <LayoutGeneric>

        <Head>
          <title>{t('hero.header')} - {t('common:site-slogan')} with Rivetz</title>
          <meta name='description' content={t('common:site-description')} />
          <meta name='canonical' content={'https://rivetz.com' + currentURL} />

          <meta itemProp='name' content={t('hero.header') + ' ' + t('common:site-slogan') + ' with Rivetz'} />
          <meta itemProp='description' content={t('hero.details')} />
          <meta itemProp='image' content='/static/logo/250px.png' />
          <meta name='og:title' content={t('hero.header') + ' ' + t('common:site-slogan') + ' with Rivetz'} />
          <meta name='og:description' content={t('hero.details')} />
          <meta name='og:image' content='/static/logo/250px.png' />
          <meta name='og:url' content={'https://rivetz.com' + currentURL} />
          <meta name='og:site_name' content='Rivetz' />
          <meta name='og:type' content='website' />
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:title' content={t('hero.header') + ' ' + t('common:site-slogan') + ' with Rivetz'} />
          <meta name='twitter:description' content={t('hero.details')} />
          <meta name='twitter:site' content='@RivetzCorp' />
          <meta name='twitter:image:src' content='/static/logo/250px.png' />

          <link rel='stylesheet' href='/static/css/compatibility.css' />

        </Head>

        {/* Page Section: Hero */}
        <div className='uk-section-large page-section section-intro'>

          <div className='illustration uk-visible@l key2' data-uk-scrollspy='cls: uk-animation-slide-right-medium; repeat: true'>
            <img src='/static/img/illustrations/solutions/serviceskey2.svg' className='ill-hero' />
          </div>
          <div className='uk-container uk-container-large uk-grid-collapse' data-uk-grid>
            <div className='uk-width-1-1@xs uk-width-4-5@l'>
              <div className='section-content'>
                <div className='section-announce' data-uk-scrollspy='cls: uk-animation-slide-bottom-medium'>
                  <h3>Rivetz</h3>
                </div>
                <div className='section-head' >
                  <h1>{t('hero.header')}</h1>
                </div>
                <div className='section-details'>
                  <p>{t('hero.details')}</p>
                </div>
                <div className='section-buttons'>
                  <a href='mailto:sales@rivetz.com'>
                    {t('common:contact-sales')}
                  </a>
                  <PartnerButton program extraClass={'off-color'} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Section: Form */}
        <div className='uk-section-large page-section section-compat'>
          <div className='uk-container-large uk-grid-collapse' data-uk-grid>
            <div className='uk-width-1-1@xs padTop2vh'>
              <div className='compat-filters uk-container-fluid uk-grid-collapse' data-uk-grid>
                <div className='uk-width-1-1@xs uk-width-2-3@m searchCont'>
                  <input onChange={this.searchDevices} class='uk-search-input' type='search' value={this.state.search} placeholder='Search for model, brand, etc..' />
                  <div className={pageSearchClass} onClick={this.clearSearch}><FontAwesomeIcon icon={['fal', 'times-circle']} data-uk-tooltip='Reset search filter.' /></div>
                </div>
                <div className='uk-width-1-1@xs uk-width-1-3@m rivetz-version uk-text-center' data-uk-tooltip='title:This is the Rivet version the below devices were tested against.'>
                  Rivet Version: <strong>{this.state.version}</strong>
                </div>
              </div>
              <div className='device-list'>
                <ul className='uk-hidden@m'>
                  {
                    this.state.devices.map((device, index) => {
                      let deviceSearch = this.state.search.toLowerCase().replace(/-/g, '') // force lowercase, remove hyphens

                      let visibilityCheck = device.model + ' ' + device.oem + ' ' + device.name + ' Android ' + device.android
                      if (device.tui === 'yes') visibilityCheck += ' TUI'
                      if (device.working === 'yes') visibilityCheck += ' Working Compatible'

                      Object.keys(device).forEach(function (key) {
                        visibilityCheck = visibilityCheck + device[key] + ' '
                      })

                      visibilityCheck = visibilityCheck.toLowerCase().replace(/-/g, '') // force lowercase, remove hyphens

                      // console.log(visibilityCheck);

                      if (visibilityCheck.includes(deviceSearch) || deviceSearch.length < 1) {
                        return (
                          <DeviceLi device={device} key={index} index={index} />
                        )
                      } else {
                        return null
                      }
                    })
                  }
                </ul>
                <table class='uk-table uk-table-striped uk-overflow-auto uk-visible@m'>
                  <thead>
                    <tr>
                      <th className='uk-table-shrink'>Brand</th>
                      <th>Name</th>
                      <th>Carrier</th>
                      <th className='uk-width-1-4'>Model Number(s)</th>
                      <th className='uk-table-shrink'>Android</th>
                      <th className='uk-width-1-6'>Compatibility</th>
                      <th className='uk-table-expand'>Features</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.devices.map((device, index) => {
                        let deviceSearch = this.state.search.toLowerCase().replace(/-/g, '') // force lowercase, remove hyphens

                        let visibilityCheck = device.model + ' ' + device.oem + ' ' + device.name + ' Android ' + device.android
                        if (device.tui === 'yes') visibilityCheck += ' TUI'
                        if (device.working === 'yes') visibilityCheck += ' Working Compatible'

                        Object.keys(device).forEach(function (key) {
                          visibilityCheck = visibilityCheck + device[key] + ' '
                        })

                        visibilityCheck = visibilityCheck.toLowerCase().replace(/-/g, '') // force lowercase, remove hyphens

                        // console.log(visibilityCheck);

                        if (visibilityCheck.includes(deviceSearch) || deviceSearch.length < 1) {
                          return (
                            <Device device={device} key={index} index={index} />
                          )
                        } else {
                          return null
                        }
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </LayoutGeneric>
    )
  }
}

const Device = ({ device, index, visibility }) => {
  let tagsClasses = 'device-item uk-animation-slide-bottom-small'
  if (device.working === 'yes') { tagsClasses += ' is-working' } else if (device.working === 'no') { tagsClasses += ' not-working' } else if (device.working === 'likely') { tagsClasses += ' maybe-working' } else { tagsClasses += ' unk-working' }

  let isWorking = (working) => {
    if (working === 'yes') {
      return 'Compatible'
    } else if (working === 'no') {
      return 'Not Compatible'
    } else if (working === 'likely') {
      return 'Likely Works'
    } else {
      return 'Not Tested'
    }
  }

  if (device.tui === 'yes') { tagsClasses += ' has-tui' } else if (device.tui === 'no') { tagsClasses += ' no-tui' }

  let hasTUI = (tui) => {
    if (tui === 'yes') {
      return 'TUI'
    } else if (tui === 'no') {
      return 'No TUI'
    } else {
      return ''
    }
  }

  let modelNumbers = (models, showUnk = false) => {
    let modelReturn = ''
    if (models && models.constructor === Array) {
      models.map((model, index) => {
        if (modelReturn.length > 0) modelReturn += ', '
        modelReturn += model
        return true
      })
    } else if (models && models.constructor !== Array) {
      modelReturn = 'fdsjflks'
    } else if (showUnk) {
      modelReturn = 'NA'
    }
    return modelReturn
  }

  let carrierString = (models, showUnk = false) => {
    let modelReturn = ''
    if (models && models.constructor === Array) {
      models.map((model, index) => {
        if (modelReturn.length > 0) modelReturn += ', '
        modelReturn += model
        return true
      })
    } else if (models && models.constructor !== Array) {
      modelReturn += models
    } else {
      modelReturn = 'Any'
    }
    return modelReturn
  }

  return (
    <tr key={index} index={index} className={tagsClasses}>
      <td>{device.oem}</td>
      <td><span class='working'>{device.name}</span></td>
      <td>{carrierString(device.carrier)}</td>
      <td>{modelNumbers(device.model)}</td>
      <td>{device.android}</td>
      <td><span class='working'>{isWorking(device.working)} <i class='fas fa-info-circle fa-fw' data-uk-tooltip="title: Even though testing hasn't been done on this device, we believe it will most likely work with Rivetz 1.0." /></span></td>
      <td className='other-notes'>
        <span className='tui' data-uk-tooltip='title:Whether the Trusted User Interface (TUI) is installed and accessible'><FontAwesomeIcon icon={['fas', 'scanner-keyboard']} />&nbsp;&nbsp;{hasTUI(device.tui)}</span>
        {/* <span className="kinibi" data-uk-tooltip="title:Kinibi Version"><FontAwesomeIcon icon={['far', 'browser']} />&nbsp;{modelString(device.kinibi)}</span> */}
        {/* <span className="silicon" data-uk-tooltip="title:Silicon"><FontAwesomeIcon icon={['far', 'microchip']} />&nbsp;{modelString(device.silicon)}</span> */}
        {/* <span className="tam" data-uk-tooltip="title:TAM Version"><FontAwesomeIcon icon={['far', 'sitemap']} />&nbsp;{modelNumbers(device.tam, true)}</span> */}
      </td>
    </tr>
  )
}

// Mobile: Render list elemeents instead of table entries
const DeviceLi = ({ device, index, visibility }) => {
  let tagsClasses = 'device-item device-item-li uk-animation-slide-bottom-small'
  if (device.working === 'yes') { tagsClasses += ' is-working' } else if (device.working === 'no') { tagsClasses += ' not-working' } else if (device.working === 'likely') { tagsClasses += ' maybe-working' } else { tagsClasses += ' unk-working' }

  let isWorking = (working) => {
    if (working === 'yes') {
      return 'Compatible'
    } else if (working === 'no') {
      return 'Not Compatible'
    } else if (working === 'likely') {
      return 'Likely Works'
    } else {
      return 'Not Tested'
    }
  }

  if (device.tui === 'yes') { tagsClasses += ' has-tui' } else if (device.tui === 'no') { tagsClasses += ' no-tui' }

  let hasTUI = (tui) => {
    if (tui === 'yes') {
      return 'TUI'
    } else if (tui === 'no') {
      return 'No TUI'
    } else {
      return ''
    }
  }

  let modelNumbers = (models, showUnk = false) => {
    let modelReturn = ''
    if (models && models.constructor === Array) {
      models.map((model, index) => {
        if (modelReturn.length > 0) modelReturn += ', '
        modelReturn += model
        return true
      })
    } else if (models && models.constructor !== Array) {
      modelReturn = 'fdsjflks'
    } else if (showUnk) {
      modelReturn = 'NA'
    }
    return modelReturn
  }

  let carrierString = (models, showUnk = false) => {
    let modelReturn = ''
    if (models && models.constructor === Array) {
      models.map((model, index) => {
        if (modelReturn.length > 0) modelReturn += ', '
        modelReturn += model
        return true
      })
    } else if (models && models.constructor !== Array) {
      modelReturn += models
    } else {
      modelReturn = 'Any'
    }
    return modelReturn
  }

  return (
    <li key={index} index={index} className={tagsClasses}>
      <div className='device-oem'>{device.oem}&nbsp;</div>
      <div className='device-name'><span class='working'>{device.name}</span></div>
      <div className='device-carrier'><span>Carrier(s):</span> {carrierString(device.carrier)}</div>
      <div className='device-model'><span>Model(s):</span> {modelNumbers(device.model)}</div>
      <div className='device-android'><span>Android Version:</span> {device.android}</div>
      <div className='device-compat'><span class='working'>{isWorking(device.working)} <i class='fas fa-info-circle fa-fw' data-uk-tooltip="title: Even though testing hasn't been done on this device, we believe it will most likely work with Rivetz 1.0." /></span></div>
      <div className='other-notes'>
        <span className='tui' data-uk-tooltip='title:Whether the Trusted User Interface (TUI) is installed and accessible'><FontAwesomeIcon icon={['fas', 'scanner-keyboard']} />&nbsp;&nbsp;{hasTUI(device.tui)}</span>
        {/* <span className="kinibi" data-uk-tooltip="title:Kinibi Version"><FontAwesomeIcon icon={['far', 'browser']} />&nbsp;{modelString(device.kinibi)}</span> */}
        {/* <span className="silicon" data-uk-tooltip="title:Silicon"><FontAwesomeIcon icon={['far', 'microchip']} />&nbsp;{modelString(device.silicon)}</span> */}
        {/* <span className="tam" data-uk-tooltip="title:TAM Version"><FontAwesomeIcon icon={['far', 'sitemap']} />&nbsp;{modelNumbers(device.tam, true)}</span> */}
      </div>
    </li>
  )
}

Compatibility.propTypes = {
  t: PropTypes.func.isRequired
}

export default withNamespaces(['compatibility', 'common'])(Compatibility)
