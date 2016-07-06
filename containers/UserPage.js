import React, { Component, PropTypes } from 'react'

class UserPage extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    console.log('click')
  }

  render () {
    return (
      <h1 onClick={this.handleClick}>123</h1>
    )
  }
}

export default UserPage
