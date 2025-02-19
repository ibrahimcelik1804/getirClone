import {createStore,combineReducers,applyMiddleware} from "redux"
import thunkMiddleware from "redux-thunk"

import { composeWithDevTools } from "redux-devtools-extension"
import cardItems from "./reducers/cardItem"


const reducers= combineReducers({
    cardItems:cardItems
})

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store