import { createStore } from 'redux'

const initialState = {
  sidebarShow: 'responsive'
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return {...state, ...rest }
    case 'logIn':
      return true
    default:
      return state
  }
}

const store = createStore(changeState)
export default store