import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import PageHeader from '../Components/PageHeader';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetch_user } from '../Services/apis';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import { useSelector } from 'react-redux';
import { RootState } from '../state/reducers';
import { ViewUser } from '../Models';
import { IsFavorite } from '../Services/Helpers';
const UserTemp = {
    name: '',
    login: '',
    avatar_url: '',
    bio: '',
    followers: 0,
    following: 0,
    public_repos: 0,
    id:''
}
function User() {
    const navigate = useNavigate();
    let { username } = useParams();
    const [user, set_user] = useState<ViewUser>(UserTemp)
    const dispatch = useDispatch()
    const {setFavorites, toggleLoading} = bindActionCreators(actionCreators, dispatch)

    const state = useSelector((state:RootState) => state.appReducer)
    const is_favoriite = IsFavorite(username)

    useEffect(() => {
        toggleLoading(true)
        let config = fetch_user(username)
        axios(config).then(function (response) {
            let data = response.data
            set_user(data)
            toggleLoading(false)
        })
        .catch(function (error) {
            navigate(`/`)
            console.log(error);
            toggleLoading(false)
        });
    }, [username, navigate])

    const add_to_favorites = () => {
        if (is_favoriite) {
            let new_favourites: any = []
            state.favorites.forEach((element: any) => {
                if (element['id'] !== user['id']) {
                    new_favourites.push(element)
                }
            });
            setFavorites(new_favourites)
        } else {
            let new_favourites:any = state.favorites
            new_favourites.push(user)
            setFavorites(new_favourites)
        }
    }
    return (
        <div className="App">
            <PageHeader />
            <div className="view_user">
                <img src={user['avatar_url']} alt={user['login']} />
                <div className='user_details'>
                    <div className="user_details_top">
                        <p className='user_full_name'>{user['name']}</p>
                        <p className='user_user_name'>@{user['login']}</p>
                        <p className='user_desc_text'>{user['bio'] || 'No Bio'}</p>
                    </div>
                    <div className='user_details_cols'>
                        <div>
                            <p className='user_cols_num'>{user['followers']}</p>
                            <p className='user_cols_desc'>FOLLOWERS</p>
                        </div>
                        <div>
                            <p className='user_cols_num'>{user['following']}</p>
                            <p className='user_cols_desc'>FOLLOWING</p>
                        </div>
                        <div>
                            <p className='user_cols_num'>{user['public_repos']}</p>
                            <p className='user_cols_desc'>REPOS</p>
                        </div>
                    </div>
                </div>
                <button className='blank_btn' onClick={add_to_favorites}>
                    {is_favoriite ? <AiFillStar size={25} color={'#F2C94C'} /> : <AiOutlineStar size={25} />}
                </button>
            </div>
        </div>
    );
}

export default User;