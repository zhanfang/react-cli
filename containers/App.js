import React, { Component, PropTypes } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { children } = this.props
    return (
      <div>
        <h1>123456</h1>
        { children }
      </div>
    )
  }
}

export default App
