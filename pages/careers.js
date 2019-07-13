import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { Link, withNamespaces } from '../i18n'
import axios from 'axios'

// import Link from 'next/link'
import LayoutGeneric from '../components/layouts/Generic'

class Careers extends React.Component {
  constructor () {
    super()
    this.state = {
      jobs: []
    }
  }
  // Called from server (page refresh) & client (client nav)
  static async getInitialProps () {
    return { // Return obj
      namespacesRequired: ['careers', 'common']
    }
  }

  componentWillMount () {
    // Fetch Team
    axios.get('//api.rivetz.com/jobs')
      .then(({ data }) => {
        // console.log(data);
      })
      .then(jobs => {
        let compileJobs = []
        if (jobs) {
          Object.keys(jobs).forEach(function (key, index) {
            jobs[key]['showDetails'] = false // Determines if we are showing details for that item
            compileJobs.push(jobs[key])
          })
          this.setState({ jobs: compileJobs, bgImage: Math.floor(Math.random() * (3 + 1)) })
        }
      })
      .catch(err => console.log(err))
  }

  render () {
    const { t } = this.props
    const currentURL = '/careers'
    return (
      <LayoutGeneric>

        <Head>
          <title>Careers with Rivetz - Building a {t('common:site-slogan')}</title>
          <meta name='description' content={t('common:site-description')} />
          <meta name='canonical' content={'https://rivetz.com' + currentURL} />

          <meta itemProp='name' content={t('hero.announce') + ' ' + t('common:site-slogan') + ' with Rivetz'} />
          <meta itemProp='description' content={t('hero.details')} />
          <meta itemProp='image' content='/static/logo/250px.png' />
          <meta name='og:title' content={t('hero.announce') + ' ' + t('common:site-slogan') + ' with Rivetz'} />
          <meta name='og:description' content={t('hero.details')} />
          <meta name='og:image' content='/static/logo/250px.png' />
          <meta name='og:url' content={'https://rivetz.com' + currentURL} />
          <meta name='og:site_name' content='Rivetz' />
          <meta name='og:type' content='website' />
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:title' content={t('hero.announce') + ' ' + t('common:site-slogan') + ' with Rivetz'} />
          <meta name='twitter:description' content={t('hero.details')} />
          <meta name='twitter:site' content='@RivetzCorp' />
          <meta name='twitter:image:src' content='/static/logo/250px.png' />

          <link rel='stylesheet' href='/static/css/careers.css' />

        </Head>

        {/* Page Section: Hero */}
        <div className='uk-section-large page-section section-intro'>
          <div className='illustration uk-visible@l key1'>
            <img src='/static/img/illustrations/rivet/key1.svg' className='ill-hero' />
          </div>
          <div className='illustration uk-visible@l key2'>
            <img src='/static/img/illustrations/rivet/key2.svg' className='ill-hero' />
          </div>
          <div className='illustration uk-visible@l key3'>
            <img src='/static/img/illustrations/rivet/key3.svg' className='ill-hero' />
          </div>
          <div className='uk-container uk-container-large uk-grid-collapse' data-uk-grid>
            <div className='uk-width-1-1@xs uk-width-4-5@l'>
              <div className='section-content'>
                <div className='section-head' >
                  <h1>{t('hero.header')}</h1>
                </div>
                <div className='section-details'>
                  <p>{t('hero.details')}</p>
                </div>
              </div>

              <div className='section-buttons'>
                <Link href='#current'>
                  <a data-uk-scroll='offset: 100;'>
                    {t('hero.cta')}
                  </a>
                </Link>
                <a className='off-color' href='mailto:careers@rivetz.com'>
                  {t('email-alt')}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Page Section: Jobs */}
        <div className='uk-section-large page-section section-jobs'>
          <div className='uk-container uk-container-large uk-grid-collapse' data-uk-grid>
            <div id='current' className='uk-width-1-1@xs uk-width-1-1@l uk-text-center'>
              {
                this.state.jobs.map((job, index) => {
                  return (
                    <Job job={job} key={index} index={index} />
                  )
                })
              }
              <NotHiring t={t} jobs={this.state.jobs.length} />
            </div>
          </div>
        </div>

      </LayoutGeneric>
    )
  }
}

const Job = ({ job, index }) => {
  if (job.timestamp && (Math.round((new Date()).getTime() / 1000) < job.timestamp)) {
    return null
  } else {
    return (
      <div className='jobOuter' key={index}>
        <div className='job'>
          <Link to={'/careers/' + job.id}>
            <div className='uk-container-expand'>
              <div className='headline'>
                <h2>
                  {job.title}
                </h2>
                <div className='quick-details'>
                  <div>ID: <span>{job.id}</span></div>
                  {/* <div>Posted: <span><Moment format="D MMM YYYY" unix>
                    {job.timestamp}
                  </Moment></span></div> */}
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

const NotHiring = ({ t, jobs }) => {
  if (jobs > 0) {
    return null
  } else {
    return (
      <div className='no-jobs'>
        <h2>{t('no-jobs')}</h2>
        <div className='section-buttons'>
          <a href='mailto:careers@rivetz.com'>
            {t('email-alt')}
          </a>
        </div>
      </div>
    )
  }
}

Careers.propTypes = {
  t: PropTypes.func.isRequired
}

export default withNamespaces(['careers', 'common'])(Careers)
