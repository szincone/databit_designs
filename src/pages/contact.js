import React, { Component } from 'react'
import { Link } from 'gatsby'

const formContainer = {
  maxWidth: '30rem',
  width: '100%',
  background: 'red',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
}
const centerCol = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}
const centerRow = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
}
const pStyle = {
  padding: '1rem',
  marginBottom: '0',
  paddingBottom: '0',
}
class Contact extends Component {
  render() {
    return (
      <div style={centerCol}>
        <div style={formContainer}>
          <form name="contact" method="POST" netlify="true">
            <div>
              <p style={pStyle}>
                <label style={{ maxWidth: '47%' }}>
                  Company:
                  <input type="text" name="company" value="" />
                </label>
              </p>
              <p style={pStyle}>
                <label>
                  Name:
                  <input type="text" name="name" value="" />
                </label>
              </p>
            </div>
            <div style={centerRow}>
              <p style={pStyle}>
                <label>
                  Phone:
                  <input type="text" name="phone" value="" />
                </label>
              </p>
              <p style={pStyle}>
                <label>
                  Email:
                  <input type="text" name="email" value="" />
                </label>
              </p>
            </div>
            <p style={pStyle}>
              <label>
                Message: <textarea name="message" />
              </label>
            </p>
            <p style={centerCol}>
              <button type="submit" className="button special">
                Send
              </button>
            </p>
          </form>
          <Link to="/" className="button special">
            Return Home
          </Link>
        </div>
      </div>
    )
  }
}

export default Contact
