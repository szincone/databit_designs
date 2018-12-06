import React, { Component } from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import sandDunesElk from '../assets/images/main/DunesMain.jpg'

class Homepage extends Component {
  render() {
    const siteTitle = 'DataBit Designs'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>Who We Are</h2>
              </header>
              <p>
                We are a small team based in the San Luis Valley who specialize
                in providing affordable, custom designed web-sites for small
                businesses and individuals. For only $20 a month, you can get a
                custom designed web-site to help drive sales and increase
                traffic to your business. Cancel your subscription at anytime
                and only pay for the months you use our service.
              </p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img
                  src={sandDunesElk}
                  alt="Picture of San Luis Valley Sand Dunes"
                />
              </span>
            </div>
          </div>
        </section>

        <section id="two" className="main style2">
          <div className="grid-wrapper">
            <div className="col-6">
              <ul className="major-icons">
                <li>
                  <span className="icon style1 major fa-star-o" />
                </li>
                <li>
                  <span className="icon style2 major fa-code" />
                </li>
                <li>
                  <span className="icon style3 major fa-star-half-o" />
                </li>
                <li>
                  <span className="icon style4 major fa-laptop" />
                </li>
                <li>
                  <span className="icon style5 major fa-star" />
                </li>
                <li>
                  <span className="icon style6 major fa-diamond" />
                </li>
              </ul>
            </div>
            <div className="col-6">
              <header className="major">
                <h2>Custom Web-Design on a Budget</h2>
              </header>
              <p>
                After using our contact form to get in touch with us, we will
                touch base with you concerning design preferences and business
                needs. We then get to work immediately on building your custom
                designed single page web-site.
              </p>
              <p>
                $20 a month includes a custom designed web-site, web hosting,
                and the ability to make <b>1</b> edit to your web-site each
                month. Additional edits and web-site redesigns cost extra. You
                can cancel your subscription at anytime and your web-site will
                continue to be hosted for the duration of the month(s) you paid
                for.
              </p>
              <p>
                We're also able to do bigger or more custom projects if a single
                page web-site doesn't suite your needs. Contact us about special
                pricing options.
              </p>
            </div>
          </div>
        </section>

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Web-Design Made Easy</h2>
              </header>
              <p>Simplifying web-sites for small businesses and indivduals.</p>
            </div>

            <div className="col-4">
              <span className="image fit">
                <span className="icon style5 major fa-code" />
              </span>
              <h3>Custom Designed</h3>
              <p>
                All web-sites are designed from the ground up using the latest
                coding practices and frameworks. All sites are created using
                React.js
              </p>
            </div>
            <div className="col-4">
              <span className="image fit">
                <span className="icon style5 major fa-users" />
              </span>
              <h3>New Audiences</h3>
              <p>
                Increase traffic by giving customers an easy place to find
                information about your place of business.
              </p>
            </div>
            <div className="col-4">
              <span className="image fit">
                <span className="icon style5 major fa-desktop" />
              </span>
              <h3>Multiple Designs</h3>
              <p>
                All web-sites include a desktop version and mobile version of
                the site to make sure you're reaching as many customers as
                possible.
              </p>
            </div>
          </div>
        </section>

        <section id="four" className="main style2 special">
          <div className="container">
            <header className="major">
              <h2>Questions?</h2>
            </header>
            <p>
              Use the link below if you're interested in getting a site or just
              want to learn more.
            </p>
            <ul className="actions uniform">
              <li>
                <a href="#" className="button special">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Homepage
