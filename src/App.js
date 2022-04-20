import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Event from './pages/Event';
import AddEvent from './pages/AddEvent';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/om-oss" element={<AboutUs />} />
          <Route path="/opprett-hending" element={<AddEvent />} />
          <Route path="/logg-inn" element={<Login />} />
          <Route path="/kvammalan" element={<Event />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
