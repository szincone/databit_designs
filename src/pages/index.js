import React, { Component } from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import sandDunesElk from '../assets/images/main/DunesMain.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
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
                Blandit faucibus proin. Ac aliquam integer adipiscing enim non
                praesent vis commodo nunc phasellus cubilia ac risus accumsan.
                Accumsan blandit. Lobortis phasellus non lobortis dit varius mi
                varius accumsan lobortis. Blandit ante aliquam lacinia lorem
                lobortis semper morbi col faucibus vitae integer placerat
                accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing
                curae consequat feugiat etiam dolore.
              </p>
              <p>
                Adipiscing a commodo ante nunc accumsan interdum mi ante
                adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus
                nascetur ac non. Lorem curae eu ante amet sapien in tempus ac.
                Adipiscing id accumsan adipiscing ipsum.
              </p>
            </div>
          </div>
        </section>

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Adipiscing amet consequat</h2>
              </header>
              <p>
                Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.
              </p>
            </div>

            <div className="col-4">
              <span className="image fit">
                <img src={pic02} alt="" />
              </span>
              <h3>Magna feugiat lorem</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                nunc lobortis non amet vis sed volutpat et nascetur.
              </p>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic03} alt="" />
              </span>
              <h3>Magna feugiat lorem</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                nunc lobortis non amet vis sed volutpat et nascetur.
              </p>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic04} alt="" />
              </span>
              <h3>Magna feugiat lorem</h3>
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
              <h2>Ipsum feugiat consequat?</h2>
            </header>
            <p>Sed lacus nascetur ac ante amet sapien.</p>
            <ul className="actions uniform">
              <li>
                <a href="#" className="button special">
                  Sign Up
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
