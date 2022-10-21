import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { Action } from "../actions/index"

export const setFavorites = (users: any) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_FAVORITES,
            payload: users
        })
    }
}

export const fetchUsers = (users: any) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.FETCH_USERS,
            payload: users
        })
    }
}

export const changePage = (page: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.CHANGE_PAGE,
            payload: page
        })
    }
}

export const toggleLoading = (type: boolean) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.TOGGLE_LOADING,
            payload: type
        })
    }
}

export const setQuery = (payload: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_QUERY,
            payload: payload
        })
    }
}

export const setPage = (payload: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_PAGE,
            payload: payload
        })
    }
}
export const setTotal = (payload: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_TOTAL,
            payload: payload
        })
    }
}