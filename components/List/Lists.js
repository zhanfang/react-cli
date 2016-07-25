import React, { Component, PropTypes } from 'react'
import pureRender from '../../common/immutable-pure-render-decorator'

@pureRender
export default class Lists extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    console.log('list is render')
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
