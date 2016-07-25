import React, { Component, PropTypes } from 'react'
import pureRender from '../../common/immutable-pure-render-decorator'

@pureRender
export default class Lists extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '哈哈哈'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    console.log(e)
    this.setState({
      title: '哈哈哈'
    })
  }

  render () {
    console.log('list is render')
    const {list} = this.props
    return (
      <div>
        <h2>{this.state.title}</h2>
        <button onClick={ e => this.handleClick(e)}>click to change title</button>
        <ul>
          {list.map((item, index) => {
            return (
              <li key={index}>
                {item.text}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
