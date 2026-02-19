import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Reservations from "./pages/Reservations";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;