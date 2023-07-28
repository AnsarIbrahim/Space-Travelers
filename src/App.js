import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRockets } from './redux/rockets/rocketsSlice';
import Missions from './components/Mission/Missions';
import Navigation from './components/Navigation/Navigation';
import MyProfile from './components/MyProfile/MyProfile';
import Rockets from './components/Rockets/Rockets';
import { getMissions } from './redux/missions/missionsSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
    dispatch(getMissions());
  });
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
