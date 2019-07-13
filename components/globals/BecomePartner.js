import React from 'react'
import PropTypes from 'prop-types'
import { withNamespaces } from '../../i18n'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'

class BecomePartner extends React.Component {
  constructor () {
    super()
    this.state = {
      bgImage: 0,
      submitForm: {
        'EMAIL': '',
        'FNAME': '',
        'LNAME': '',
        'PHONE': '',
        'WEBSITE': '',
        'PROJINFO': ''
      },
      submitErrors: false,
      showThanks: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  static async getInitialProps () {
    return { // Return obj
      namespacesRequired: ['common']
    }
  }

  // Handle input changes in form
  handleInputChange (event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    let updateState = { ...this.state.submitForm }
    updateState[name] = value
    this.setState({
      submitForm: updateState
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    const submitData = this.state.submitForm
    console.log('Submitting...')

    // Subscribe to partners list
    axios.post('//api.rivetz.com/subscribe/98e648ff8b', submitData)
      .then(res => {
        if (res.data.success) {
          this.setState({
            showThanks: true
          })
          console.log('You successfully subscribed - thanks for getting in touch with us!')
        } else if (res.data.notice) {
          this.setState({
            showThanks: true
          })
          console.log(res.data.notice)
        }
      }).catch(err => {
        this.setState({
          submitErrors: true
        })
        console.log('Oops, we ran into an issue while subscribing you!', err)
      })
  }

  render () {
    if (this.props.visibility) {
      return (
        <div id='becomePartner' className={(this.props.visibility ? 'is-visible' : null)}>
          <div className='partner-inner uk-grid-small' data-uk-grid>
            <h2>Partner with Rivetz!</h2>
            <div className='uk-width-1-1@s uk-text-center'>
              {(this.state.showErrors ? 'There was an error in your submission. Please fill out all of the fields below!' : '')}
            </div>
            <div className='uk-width-1-3@s'>
              <label htmlFor='firstName'>Your first name</label>
            </div>
            <div className='uk-width-2-3@s'>
              <input onChange={this.handleInputChange} className='uk-input' type='text' name='FNAME' placeholder='Jane' />
            </div>
            <div className='uk-width-1-3@s'>
              <label htmlFor='lastName'>Your last name</label>
            </div>
            <div className='uk-width-2-3@s'>
              <input onChange={this.handleInputChange} className='uk-input' type='text' name='LNAME' placeholder='Smith' />
            </div>
            <div className='uk-width-1-3@s'>
              <label htmlFor='email'>Your work email</label>
            </div>
            <div className='uk-width-2-3@s'>
              <input onChange={this.handleInputChange} className='uk-input' type='email' name='EMAIL' placeholder='you@company.com' />
            </div>
            <div className='uk-width-1-3@s'>
              <label htmlFor='phone'>Your phone number</label>
            </div>
            <div className='uk-width-2-3@s'>
              <input onChange={this.handleInputChange} className='uk-input' type='text' name='PHONE' placeholder='Phone Number' />
            </div>
            <div className='uk-width-1-3@s'>
              <label htmlFor='website'>Company website</label>
            </div>
            <div className='uk-width-2-3@s'>
              <input onChange={this.handleInputChange} className='uk-input' type='text' name='WEBSITE' placeholder='https://company.com' />
            </div>
            <div className='uk-width-1-3@s'>
              <label htmlFor='freeform'>Anything else?</label>
            </div>
            <div className='uk-width-2-3@s'>
              <textarea onChange={this.handleInputChange} name='PROJINFO' placeholder='Tell us more about your project needs and timeline.' />
            </div>
            <div className='uk-width-1-1@s uk-text-right'>
              <button className='submit-btn' type='submit'>
                <span><FontAwesomeIcon icon={['fas', 'paper-plane']} />Submit & Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

BecomePartner.propTypes = {
  t: PropTypes.func.isRequired,
  visibility: PropTypes.bool
}

export default withNamespaces(['common'])(BecomePartner)
