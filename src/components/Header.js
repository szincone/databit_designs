import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          <span className="icon major fa-code" />
          <h1>
            DataBit Designs
            {/* <br /> */}
          </h1>
          <h2>Affordable web design for the San Luis Valley.</h2>
          <ul className="actions">
            <li>
              <a href="#one" className="button scrolly">
                Learn More
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Header
