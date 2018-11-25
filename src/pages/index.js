import React, { Component } from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import sandDunesElk from '../assets/images/main/DunesMain.jpg'
import pic02 from '../assets/images/main/computer_code.jpg'
import pic03 from '../assets/images/main/computer_graphs.jpg'
import pic04 from '../assets/images/pic04.jpg'

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
                <h2>About Us</h2>
              </header>
              <p>
                We are a small team based in the San Luis Valley who specialize
                in providing affordable, custom designed web-sites for small
                businesses and individuals.
                <br /> For only $20 a month, you can get a custom designed
                web-site to help drive sales and increase traffic to your
                business. Cancel your subscription at anytime and only pay for
                the months you use our service.
              </p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={sandDunesElk} alt="San Luis Valley Sand Dunes" />
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
                After using our contact form, we'll touch base to discuss an
                overall theme to your site. Then we get to work on creating your{' '}
                <b>single page, static</b> web-site. The whole process, from
                design, to building, to hosting of the web-site usually takes
                between 1-2 weeks depending on the number of projects we are
                working on at any given time.
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
                * If you require more than a single page, static web-site we are
                also able to provide more custom solutions for additional cost.
              </p>
            </div>
          </div>
        </section>

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Services</h2>
              </header>
              <p>
                Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.
              </p>
            </div>

            <div className="col-4">
              <span className="image fit">
                <img src={pic02} alt="" />
              </span>
              <h3>Custom Design</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                nunc lobortis non amet vis sed volutpat et nascetur.
              </p>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic03} alt="" />
              </span>
              <h3>Affordable</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                nunc lobortis non amet vis sed volutpat et nascetur.
              </p>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic04} alt="" />
              </span>
              <h3>Ongoing</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                nunc lobortis non amet vis sed volutpat et nascetur.
              </p>
            </div>
          </div>
        </section>

        <section id="four" className="main style2 special">
          <div className="container">
            <header className="major">
              <h2>Questions or want to learn more?</h2>
            </header>
            <p>
              Use the link below if you're interested in getting a site or would
              just like to learn more.
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
