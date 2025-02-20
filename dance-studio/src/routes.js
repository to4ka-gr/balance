import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Gallery from './pages/Gallery';
import Schedule from './pages/Schedule';
import Trainers from './pages/Trainers';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/trainers" element={<Trainers />} />
    </Routes>
  );
};

export default AppRoutes;
