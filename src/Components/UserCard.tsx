import { AiOutlineStar } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { RootState } from '../state/reducers';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import { IsFavorite } from '../Services/Helpers';

function UserCard({data}:any) {
  const dispatch = useDispatch()
  const {setFavorites} = bindActionCreators(actionCreators, dispatch)
  const { login, avatar_url, id } = data
  const navigate = useNavigate();
  const state = useSelector((state:RootState) => state.appReducer)
  const is_favoriite = IsFavorite(login)

  const view_user = () => {
    navigate(`/user/${login}`)
  }

  const add_to_favorites = () => {
    if(is_favoriite){
      let new_favourites:any = []
      state.favorites.forEach((element:any) => {
          if(element['id'] !== id){
            new_favourites.push(element)
          }
      });
      setFavorites(new_favourites)
    }else{
      let new_favourites:any = state.favorites
      new_favourites.push(data)
      setFavorites(new_favourites)
    }
  }

  return (
    <div className="user_card">
      <img onClick={view_user} loading='lazy' className='user_profile_pic' src={avatar_url} alt={login} />
      <div className='card_main' onClick={view_user}>
        <p className='card_main_name'>@{login}</p>
        <p className='card_main_desc'>Enim cillum occaecat minim mollit cupidatat veniam laborum et officia anim.</p>
      </div>
      <button className='blank_btn' onClick={add_to_favorites}>
        { is_favoriite ? <AiFillStar size={25} color={'#F2C94C'}/> : <AiOutlineStar size={25} /> }
      </button>
    </div>
  );
}

export default UserCard;