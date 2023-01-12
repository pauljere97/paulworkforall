import { ActionType } from "../action-types/index"
import { Action } from "../actions"

let favorites:any = localStorage.getItem('favourites') || '[]'
const initialState = {
    loading:false,
    page:1,
    totalUsers:0,
    search_query:'',
    favorites:JSON.parse(favorites),
    users:[]
};

const reducer = (state: any = initialState, action: Action) => {
    switch (action.type){
        case ActionType.FETCH_USERS:
            return { ...state, users:action.payload}
        case ActionType.SET_FAVORITES:{
            localStorage.setItem('favourites', JSON.stringify(action.payload))
            return { ...state, favorites:action.payload}
        }
        case ActionType.CHANGE_PAGE:
            return { ...state, page:action.payload}
        case ActionType.TOGGLE_LOADING:
            return { ...state, loading:action.payload}
        case ActionType.SET_QUERY:
            return { ...state, search_query:action.payload}
        case ActionType.SET_PAGE:
            return { ...state, page:action.payload}
        case ActionType.SET_TOTAL:
            return { ...state, totalUsers:action.payload}
        default:
            return state
    }
}

export default reducer