import * as actions from './action'

const defaultState = {
topbanner:[]
}
function reducer(state = defaultState, action) {
  switch (action.type) {
    case actions.FRICHILD:
      return { ...state, topbanner:[]}
    default:
      return state
  }
}

export default reducer