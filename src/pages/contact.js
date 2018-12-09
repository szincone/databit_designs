import React, { Component } from 'react'
import { Link } from 'gatsby'

class Contact extends Component {
  render() {
    return (
      <>
        <form name="contact" method="POST" netlify>
          <p>
            <label>
              Company:
              <input type="text" name="company" value="" />
            </label>
          </p>
          <p>
            <label>
              Name:
              <input type="text" name="name" value="" />
            </label>
          </p>
          <p>
            <label>
              Phone:
              <input type="text" name="phone" value="" />
            </label>
          </p>
          <p>
            <label>
              Email:
              <input type="text" name="email" value="" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" />
            </label>
          </p>
          <p>
            <button type="submit" className="button special">
              Send
            </button>
          </p>
        </form>
        <Link to="/" className="button special">
          Return Home
        </Link>
      </>
    )
  }
}

export default Contact
