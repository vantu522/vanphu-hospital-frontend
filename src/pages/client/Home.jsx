import React from "react";
import { Link } from "react-router-dom";
import WhyChooseUs from "../../components/client/sections/Home/WhyChooseUs";
import AboutSection from "../../components/client/sections/Home/AboutSection";
import ClinicStats from "../../components/client/sections/Home/ClinicStats";
import SpecialtiesSection from "../../components/client/sections/Home/SpecialtiesSection";
import AwardsSection from "../../components/client/sections/Home/AwardsSection";
import DoctorTeam from "../../components/client/sections/Home/DoctorTeam";
import HospitalBanner from "../../components/client/sections/Home/HospitalBanner";
import NewsEvents from "../../components/client/sections/Home/NewsEvents";
import Slider from "../../components/client/sections/Home/Slider";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Trang chủ</title>
      </Helmet>
      <Slider/>
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
