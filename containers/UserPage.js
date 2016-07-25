import React, { Component, PropTypes } from 'react'
import connect from '../connect/index'
import Lists from '../components/List/Lists'
import Lists2 from '../components/List/Lists2'

class UserPage extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    console.log('click')
  }

  render () {
    console.log('UserPage is render')
    const {user, changeUsername} = this.props
    return (
      <div>
        <h1>{user.username}</h1>
        <button onClick={changeUsername}>click me</button>
        <Lists list={user.list}/>
        <Lists2 list={user.list2}/>
      </div>
    )
  }
}

export default connect(UserPage)
