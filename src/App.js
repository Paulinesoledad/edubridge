import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RequestForm from "./pages/RequestForm";
import Tutors from "./pages/Tutors";
import FAQ from "./pages/FAQ";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/request" element={<RequestForm />} />
        <Route path="/tutors" element={<Tutors />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;
