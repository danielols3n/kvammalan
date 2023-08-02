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
import Confirmation from './pages/Confirmation';
import Cancel from './pages/Cancel';
import Success from './pages/Success';
import AudienceCheckout from './pages/AudienceCheckout';


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
          <Route path="/kvammalan/checkout/confirmation" element={<Confirmation />} />
          <Route path="/kvammalan/checkout/cancel" element={<Cancel />} />
          <Route path="/kvammalan/checkout/success" element={<Success />} />
          <Route path="/kvammalan/checkout/audience" element={<AudienceCheckout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
