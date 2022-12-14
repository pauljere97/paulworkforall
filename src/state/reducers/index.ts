import { combineReducers } from "redux";
import appReducer from "./appReducer"


const reducers = combineReducers({
    appReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>