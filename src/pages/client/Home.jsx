import React from "react";
import { Link } from "react-router-dom";
import WhyChooseUs from "../../components/client/WhyChooseUs";
import AboutSection from "../../components/client/AboutSection";
import ClinicStats from "../../components/client/ClinicStats";
import SpecialtiesSection from '../../components/client/SpecialtiesSection';
import AwardsSection from '../../components/client/AwardsSection';
import DoctorTeam from "../../components/client/DoctorTeam";
import HospitalBanner from "../../components/client/HospitalBanner";
import NewsEvents from "../../components/client/NewsEvents";
const Home = () => {
  return (
    <>
      <WhyChooseUs />
      <AboutSection />
      <ClinicStats />
      <SpecialtiesSection />
      <AwardsSection />
      <DoctorTeam />
      <HospitalBanner />
      <NewsEvents />
    </>
  );
};

export default Home;
