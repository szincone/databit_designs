import React, { Component } from 'react'
import { Link } from 'gatsby'

class Contact extends Component {
  render() {
    return (
      <>
        <iframe
          height="773"
          title="wufoo-form"
          frameBorder="0"
          scrolling="no"
          style={{ width: '100%', border: 'none' }}
          src="https://szincone.wufoo.com/embed/m4cdg611ty6wbe/"
        />
        <Link to="/" className="button special">
          Return Home
        </Link>
      </>
    )
  }
}

export default Contact
