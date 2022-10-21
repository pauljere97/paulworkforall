import React, { useRef, useCallback } from 'react';
import MainHeader from '../Components/MainHeader';
import UserCard from '../Components/UserCard';
import { useSelector } from 'react-redux';
import { RootState } from '../state/reducers';
import { fetch_users } from '../Services/apis';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import axios from 'axios';
import { User } from '../Models';

function Home() {
  const state = useSelector((state: RootState) => state.appReducer)
  const dispatch = useDispatch()
  const {fetchUsers, toggleLoading, setPage} = bindActionCreators(actionCreators, dispatch)

  const observer: any = useRef()
  const lastUserNode = useCallback((node: any) => {
    if (state.loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver((entries: any) => {
      if (entries[0].isIntersecting && !state.loading && state.totalUsers > state.users.length) {
        toggleLoading(true)
        let payload = `q=${state.search_query}&page=${state.page}`
        let config = fetch_users(payload)
        setPage((state.page + 1))
        axios(config).then(function (response) {
          let data = response.data
          fetchUsers(state.users.concat(data['items']))
          toggleLoading(false)
        })
          .catch(function (error) {
            console.log(error);
            toggleLoading(false)
          });
      }
    })

    if (node) observer.current.observe(node)

  }, [state.loading, state.totalUsers, fetchUsers, toggleLoading, setPage, state.page, state.search_query, state.users])


  return (
    <div className="App">
      <MainHeader />
      <div className="list_pad">
        {state.users.map((element:User, index: number) => {
          if (state.users.length === index + 1) {
            return <div ref={lastUserNode} key={Math.random()}><UserCard data={element} /></div>
          } else {
            return <UserCard data={element} key={Math.random()} />
          }
        })}
        {
          state.users.length ? '' : <p className='empty_list'>No Search Results</p>
        }
      </div>
    </div>
  );
}

export default Home;