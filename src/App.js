import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Event from './pages/Event';
import Privacy from './pages/Privacy';
import FAQ from './pages/FAQ';
import ContactUs from './pages/ContactUs';
import SeatMap from './pages/SeatMap';
import CheckoutInfo from './pages/CheckoutInfo';
import Confirmation from './pages/Confirmation';
import Cancel from './pages/Cancel';
import Success from './pages/Success';
import AudienceCheckout from './pages/AudienceCheckout';
import ParentalConsent from './pages/ParentalConsent';
import AdminLogin from './pages/admin/AdminLogin';
import AdminLanding from './pages/admin/AdminLanding';
import AdminParticipants from './pages/admin/AdminParticipants';
import AdminCheckIn from './pages/admin/AdminCheckIn';


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
          <Route path="/kvammalan/checkout/seat-map" exact element={<SeatMap />} />
          <Route path="/kvammalan/checkout/participant-info" element={<CheckoutInfo />} />
          <Route path="/kvammalan/checkout/confirmation" element={<Confirmation />} />
          <Route path="/kvammalan/checkout/cancel" element={<Cancel />} />
          <Route path="/kvammalan/checkout/success" element={<Success />} />
          <Route path="/kvammalan/checkout/audience" element={<AudienceCheckout />} />
          <Route path="/kvammalan/parent-consent" element={<ParentalConsent />} />
          <Route path="/kvammalan/admin/login" element={<AdminLogin />} />
          <Route path="/kvammalan/admin/" element={<AdminLanding />} />
          <Route path="/kvammalan/admin/participants" element={<AdminParticipants /> } />
          <Route path="/kvammalan/admin/check-in" element={<AdminCheckIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
