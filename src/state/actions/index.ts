import { ActionType } from "../action-types/index"

interface fetchUsersAction {
    type: ActionType.FETCH_USERS,
    payload: any
}

interface setFavoritesAction {
    type: ActionType.SET_FAVORITES,
    payload: any
}

interface changePage {
    type: ActionType.CHANGE_PAGE,
    payload: any
}

interface toggleLoading {
    type: ActionType.TOGGLE_LOADING,
    payload: any
}

interface setQuerry {
    type: ActionType.SET_QUERY,
    payload: any
}

interface setPage {
    type: ActionType.SET_PAGE,
    payload: any
}
interface setTotal {
    type: ActionType.SET_TOTAL,
    payload: number
}

export type Action = setFavoritesAction | fetchUsersAction | changePage | toggleLoading | setQuerry | setPage | setTotal;