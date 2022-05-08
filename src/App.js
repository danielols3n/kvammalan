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
import Registrations from './pages/Registrations';
import DisplayRegistration from './pages/DisplayRegistration';
import Privacy from './pages/Privacy';
import FAQ from './pages/FAQ';
import ContactUs from './pages/ContactUs';
import EventRegistration from './pages/EventRegistration';

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
          <Route path="/pameldingar" element={<Registrations />} />
          <Route path="/pameldingar/:id" element={<DisplayRegistration />} />
          <Route path="/personvern-og-vilkar" element={<Privacy />} />
          <Route path="/kontakt-oss" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/registrering" element={<EventRegistration />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
