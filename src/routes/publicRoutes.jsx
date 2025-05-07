import ClientLayout from "../components/client/layout/ClientLayout";
import Contact from "../pages/client/Contacts/Contact";
import DoctorDetail from "../pages/client/Doctors/DoctorDetail";
import DoctorList from "../pages/client/Doctors/DoctorList";
import HealthAdvisory from "../pages/client/HealthAdvisory/HealthAdvisory";
import HealthDetail from "../pages/client/HealthAdvisory/HealthDetail";
import Home from "../pages/client/Home";
import Service from "../pages/client/Services/Service";
import ServiceDetail from "../pages/client/Services/ServiceDetail";
import SpecitaltyDetail from "../pages/client/Specialty/SpecialtyDetail";
import SpecialtyList from "../pages/client/Specialty/SpecialtyList";
import About from "../pages/client/About/About";
import Regulation from "../components/client/sections/Instruct/HospitalRules";
import Recruitment from "../pages/client/Recruitment/Recruitment";
import News from "../pages/client/News/New";
import NewsDetail from "../pages/client/News/NewDetail";
import Login from "../pages/client/Login";
import SignUp from "../pages/client/Register";
const publicRoutes = [

  {
    path: "/",
    element: <ClientLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "dich-vu", element: <Service /> },
      { path: "chi-tiet-dich-vu", element: <ServiceDetail /> },
      { path: "danh-sach-bac-si", element: <DoctorList /> },
      { path: "chuyen-khoa", element: <SpecialtyList /> },
      { path: "chi-tiet-bac-si", element: <DoctorDetail /> },
      { path: "chi-tiet-chuyen-khoa", element: <SpecitaltyDetail /> },
      { path: "lien-he", element: <Contact /> },
      { path: "tu-van-suc-khoe", element: <HealthAdvisory /> },
      { path: "chi-tiet-bai-tu-van", element: <HealthDetail /> },
      { index: true, element: <Home /> },
      { path: "dich-vu", element: <Service /> },
      { path: "chi-tiet-dich-vu", element: <ServiceDetail /> },
      { path: "danh-sach-bac-si", element: <DoctorList /> },
      { path: "chuyen-khoa", element: <SpecialtyList /> },
      { path: "chi-tiet-bac-si", element: <DoctorDetail /> },
      { path: "gioi-thieu", element: <About /> },
      { path: "gioi-thieu/ve-hong-ngoc", element: <About /> },
      { path: "gioi-thieu/huong-dan-khach-hang", element: <Regulation /> },
      { path: "lien-he", element: <Contact /> },
      { path: "tu-van-suc-khoe", element: <HealthAdvisory /> },
      { path: "tuyen-dung", element: <Recruitment /> },
      { path: "tin-tuc", element: <News /> },
      { path: "chi-tiet-tin-tuc", element: <NewsDetail /> },
        { path: "dang-nhap", element: <Login />},
            { path: "dang-ky", element: <SignUp />},
    ],
  },
];

export default publicRoutes;
