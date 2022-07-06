import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Event from './pages/Event';
import Privacy from './pages/Privacy';
import FAQ from './pages/FAQ';
import ContactUs from './pages/ContactUs';


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
        </Routes>
      </Router>
    </>
  );
}

export default App;
