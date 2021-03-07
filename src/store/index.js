import { createStore, applyMiddleware,compose} from 'redux'
import  thunk  from 'redux-thunk'
import reducer from './reducer'
const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const state = createStore(reducer, devTools(applyMiddleware(thunk)))


 export default state