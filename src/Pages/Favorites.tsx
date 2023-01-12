import UserCard from '../Components/UserCard';
import PageHeader from '../Components/PageHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../state/reducers';

function Favorites() {
  const state = useSelector((state:RootState) => state.appReducer)

  return (
    <div className="App">
      <PageHeader />
      <div className="list_pad">
        {state.favorites.map((element: any) => {
          return <UserCard data={element} key={element['id']} />
        })}
        { state.favorites.length ? <></> : <p className='empty_list'>No Favorites</p> }
      </div>
    </div>
  );
}

export default Favorites;