import "./App.css";
import { Routes, Route } from "react-router-dom";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";
// pages
import Home from "./pages/Home";
import MaleCover from "./pages/MaleCover";
import FemaleCover from "./pages/FemaleCover";
import AICover from "./pages/AICover";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/malecover" element={<MaleCover />} />
        <Route path="/femalecover" element={<FemaleCover />} />
        <Route path="/aicover" element={<AICover />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
