import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Features from "./Pages/Features";
import Price from "./Pages/Price";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { Header } from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/price" element={<Price />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
