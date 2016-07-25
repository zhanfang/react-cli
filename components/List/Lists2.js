import React, { Component, PropTypes } from 'react'

export default class Lists2 extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    console.log('list2 render')
    const {list} = this.props
    return (
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index}>
              {item.text}
            </li>
          )
        })}
      </ul>
    )
  }
}
