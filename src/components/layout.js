import React, { Component } from 'react'
import '../assets/scss/main.scss'

import Header from './Header'
import Footer from './Footer'

class Template extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: 'is-loading',
    }
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  render() {
    const { children } = this.props
    console.log('GATBSY PROPS', children)
    return (
      <div className={`body ${this.state.loading}`}>
        <Header />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Template
