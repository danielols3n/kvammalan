import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Event from './pages/Event';
import AddEvent from './pages/AddEvent';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Success from './pages/Success';
import Cancel from './pages/Cancel';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/om-oss" element={<AboutUs />} />
          <Route path="/opprett-hending" element={<AddEvent />} />
          <Route path="/logg-inn" element={<Login />} />
          <Route path="/kvammalan" exact element={<Event />} />
          <Route path="/kvammalan/pamelding" exact element={<Registration />} />
          <Route path="/kvammalan/pamelding/success" exact element={<Success />} />
          <Route path="/kvammalan/pamelding/cancel" element={<Cancel />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
