import { useSelector } from "react-redux"
import { User } from "../Models"
import { RootState } from "../state/reducers"
export const IsFavorite = (username:any) => {
    const state = useSelector((state: RootState) => state.appReducer)
    let user = state.favorites.find((e:User) => e['login'] === username)
    if(user) return true
    return false
}