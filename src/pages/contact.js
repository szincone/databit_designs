import React, { Component } from 'react'
import { Link } from 'gatsby'

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

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  render() {
    console.log('State', this.state)
    return (
      <div className="centerCol">
        <div className="formContainer">
          <form name="contact" method="POST" netlify="true">
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
                    placeholder="name"
                    onChange={this.changeHandler}
                  />
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
                    placeholder="phone"
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
                    placeholder="email"
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
                  placeholder="message"
                  value={this.state.message}
                  onChange={this.changeHandler}
                />
              </label>
            </p>
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
