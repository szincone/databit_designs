import React, { Component } from 'react'
import { Link } from 'gatsby'
import { ContactHeader } from '../components/ContactHeader.js'

const centerCol = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}
const centerRow = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
}
const pStyle = {
  padding: '1rem',
  marginBottom: '0',
  paddingBottom: '0',
}
class Contact extends Component {
  state = {
    company: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  }

  changeHandler = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    })
  }

  netlifyInputCheck = () => {
    if (this.state.name === '') {
      alert('A name must be provided.')
    } else if (this.state.email === '') {
      alert('An email must be provided.')
    } else if (this.state.phone === '') {
      alert('A phone number must be provided.')
    } else if (this.state.message === '') {
      alert('A message must be provided.')
    } else {
      // do the damn thing
    }
  }
  render() {
    return (
      <div className="centerCol">
        <ContactHeader />
        <div className="formContainer">
          <form
            name="contact"
            method="POST"
            netlify-honeypot="honey-bot-field"
            data-netlify="true"
            onSubmit={this.netlifyInputCheck}
          >
            <input
              type="hidden"
              style={{ display: 'none' }}
              name="form-name"
              value="contact"
            />
            <div>
              <p style={pStyle}>
                <label style={{ maxWidth: '47%' }}>
                  Company:
                  <input
                    value={this.state.company}
                    type="text"
                    name="company"
                    placeholder="company"
                    onChange={this.changeHandler}
                  />
                </label>
              </p>
              <p style={pStyle}>
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    placeholder="name (required)"
                    onChange={this.changeHandler}
                  />
                </label>
              </p>
              <p style={{ display: 'none' }}>
                <label>
                  Bees:
                  <input name="honey-bot-field" />
                </label>
              </p>
            </div>
            <div style={centerRow}>
              <p style={pStyle}>
                <label>
                  Phone:
                  <input
                    type="text"
                    name="phone"
                    value={this.state.phone}
                    placeholder="phone (required)"
                    onChange={this.changeHandler}
                  />
                </label>
              </p>
              <p style={pStyle}>
                <label>
                  Email:
                  <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    placeholder="email (required)"
                    onChange={this.changeHandler}
                  />
                </label>
              </p>
            </div>
            <p style={pStyle}>
              <label>
                Message:{' '}
                <textarea
                  name="message"
                  placeholder="message (required)"
                  value={this.state.message}
                  onChange={this.changeHandler}
                />
              </label>
            </p>
            <div data-netlify-recaptcha="true" />
            <p style={centerCol}>
              <button type="submit" className="button special">
                Send
              </button>
            </p>
          </form>
          <Link
            to="/"
            style={{ height: '3rem', borderRadius: '0 0 4px 4px' }}
            className="button special"
          >
            Return Home
          </Link>
        </div>
      </div>
    )
  }
}

export default Contact
