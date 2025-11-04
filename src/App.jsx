import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Booking from "./components/Booking";
import Reviews from "./components/Reviews";

const App = () => {
  return (
    <>
      <Toaster position="top-center" />
      <Router basename="/TravelEase">
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
