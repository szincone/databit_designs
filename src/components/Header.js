import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          <span className="icon major fa-code" />
          <h1>
            DataBit Designs
            <br />
            Accumsan feugiat mi commodo erat.
          </h1>
          <p>
            Accumsan feugiat mi commodo erat lorem ipsum, sed magna
            <br />
            lobortis feugiat sapien sed etiam volutpat accumsan.
          </p>
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
