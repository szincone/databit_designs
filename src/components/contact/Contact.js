import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <>
        <iframe
          height="773"
          allowTransparency="true"
          frameborder="0"
          scrolling="no"
          style="width:100%;border:none"
          src="https://szincone.wufoo.com/embed/m4cdg611ty6wbe/"
        >
          <a href="https://szincone.wufoo.com/forms/m4cdg611ty6wbe/">
            Fill out my Wufoo form!
          </a>
        </iframe>
        <div
          id="wuf-adv"
          style="font-family:inherit;font-size: small;color:#a7a7a7;text-align:center;display:block;"
        >
          <span class="notranslate">
            The easy to use{' '}
            <a href="http://www.wufoo.com/form-builder/">Wufoo form builder</a>{' '}
            helps you make forms easy, fast, and fun.
          </span>
        </div>
      </>
    )
  }
}

export default Contact
