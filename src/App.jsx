import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";
// pages
import Home from "./pages/Home";
import MaleCover from "./pages/MaleCover";
import FemaleCover from "./pages/FemaleCover";
import AICover from "./pages/AICover";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Notfound from "./pages/Notfound";

function App() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log("Logged in with token:", token);
    } else {
      console.log("No token found, not logged in.");
    }
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/malecover" element={<MaleCover />} />
        <Route path="/femalecover" element={<FemaleCover />} />
        <Route path="/aicover" element={<AICover />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
