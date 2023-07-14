import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Event from './pages/Event';
import Privacy from './pages/Privacy';
import FAQ from './pages/FAQ';
import ContactUs from './pages/ContactUs';
import Registration from './pages/Registration'
import SeatMap from './pages/SeatMap';
import CheckoutInfo from './pages/CheckoutInfo';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/om-oss" element={<AboutUs />} />
          <Route path="/kvammalan" exact element={<Event />} />
          <Route path="/personvern-og-vilkar" element={<Privacy />} />
          <Route path="/kontakt-oss" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/pamelding" element={<Registration />} />
          <Route path="/kvammalan/checkout/seat-map" element={<SeatMap />} />
          <Route path="/kvammalan/checkout/participant-info" element={<CheckoutInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
