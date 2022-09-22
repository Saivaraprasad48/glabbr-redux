import { createStore, applyMiddleware } from "redux"
import reducers from "./Reducers"
import thunk from "redux-thunk"

const middleware = [thunk]

const store = createStore(reducers, applyMiddleware(...middleware))

export default store