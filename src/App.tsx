import './App.css';
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import Home from './Pages/Home';
import Favorites from './Pages/Favorites';
import User from './Pages/User';
import LoadingScreen from './Components/LoadingScreen';

function App() {

  return (
    <Router>
      <LoadingScreen/>
      <Routes>
        <Route path="/user/:username" element={<User />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
