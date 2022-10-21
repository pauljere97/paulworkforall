
import {FiLoader} from "react-icons/fi"
import { useSelector } from 'react-redux';
import { RootState } from '../state/reducers';


export default function LoadingScreen() {
    const state = useSelector((state:RootState) => state.appReducer)
    return (
        <div className={state.loading ? "loading_screen":"loading_screen_off"}>
            <div className="loader_icon">
                <FiLoader/>
            </div>
        </div>
    )
}
