import axios from 'axios';
import { useState } from 'react';
import {AiOutlineStar, AiFillStar} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { fetch_users } from '../Services/apis';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import { useSelector } from 'react-redux';
import { RootState } from '../state/reducers';

const CancelToken = axios.CancelToken;
let cancel:any;

const MainHeader = () => {
  const dispatch = useDispatch()
  const {fetchUsers, toggleLoading, setPage, setQuery, setTotal} = bindActionCreators(actionCreators, dispatch) // fetch redux actions
  const state = useSelector((state:RootState) => state.appReducer)
  const [search_text, set_search] = useState(state.search_query)

  const handleSearchChange = (value:string) => {
    set_search(value)
    if(value.length < 3) return
    if (cancel !== undefined) cancel(); // cancels previous unfinished axios requests
    let cancelToken:any = new CancelToken((c) => cancel = c ) // stes axios cancel token

    let payload = `q=${value}&page=1`
    let config = fetch_users(payload, cancelToken)
    toggleLoading(true)
    fetchUsers([]) // removes aall user from state
    setQuery(value) // set query string in state for global access
    setPage(1) // sets list page back to 1

    axios(config).then(function (response) {
      let data = response.data
      setTotal(data['total_count'])
      fetchUsers(data['items'])
      toggleLoading(false)
    })
    .catch(function (error) {
        console.log(error);
        toggleLoading(false)
    });
  };
  
  return (
    <div className="header">
      <div className="top_bar">
        <BsSearch size={17} className='top_bar_icons'/>
        <input 
          type="search" 
          placeholder='Search for GitHub users...' 
          value={search_text} 
          onChange={(e)=>handleSearchChange(e.target.value)}
        />
        <Link to='favorites'>
          {
              state.favorites.length ? 
              <AiFillStar size={25} color={'#F2C94C'}/> : 
              <AiOutlineStar size={25} className='top_bar_icons'/>
          }
        </Link>
      </div>
    </div>
  );
}

export default MainHeader;