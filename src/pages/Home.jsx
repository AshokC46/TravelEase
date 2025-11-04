import React from "react";
import HeroSection from "../components/HeroSection";
import DestinationsGrid from "../components/DestinationsGrid";
import Destinations from "./Destinations";
import Booking from "../components/Booking";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <>
      <HeroSection />
      <DestinationsGrid />
      <Destinations />
      <Booking />
      <Reviews />
    </>
  );
};

export default Home;
