import { CHANGE_USERNAME } from '../constants/index'

const defaultState = {
  username: 'zhan',
  list: [
    {
      text: '测试1'
    },
    {
      text: '测试2'
    }
  ],
  list2: [
    {
      text: 'list2'
    },
    {
      text: 'list2-2'
    }
  ]
}

export default function user(state = defaultState, action) {
  console.log('123')
  switch (action.type) {
    case CHANGE_USERNAME:
      console.log('11111')
      return Object.assign({},state, {
        username: 'zhanfang'
      })
    default:
      return state 
  }
}