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

function MainHeader() {
  const dispatch = useDispatch()
  const {fetchUsers, toggleLoading, setPage, setQuery, setTotal} = bindActionCreators(actionCreators, dispatch)
  const state = useSelector((state:RootState) => state.appReducer)

  const [search_text, set_search] = useState(state.search_query)
  const key_press = (e:any) => {
    if(e.key === 'Enter') change_text()
  }
  const change_text = () => {
    if(search_text.length < 3) return
    let payload = `q=${search_text}&page=1`
    let config = fetch_users(payload)
    toggleLoading(true)
    fetchUsers([])
    setQuery(search_text)
    setPage(1)
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
  }
  
  return (
    <div className="header">
      <div className="top_bar">
        <BsSearch size={17} className='top_bar_icons'/>
        <input 
          type="search" 
          placeholder='Search for GitHub users...' 
          value={search_text} 
          onChange={(e)=>set_search(e.target.value)}
          onKeyDown={key_press}
        />
        <Link to='favorites'>
          {
        
        state.favorites.length ? <AiFillStar size={25} color={'#F2C94C'}/> : <AiOutlineStar size={25} className='top_bar_icons'/>
          }
        </Link>
      </div>
    </div>
  );
}

export default MainHeader;