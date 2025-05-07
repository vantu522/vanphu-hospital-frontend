import ClientLayout from "../components/client/layout/ClientLayout";
import DoctorDetail from "../pages/client/Doctors/DoctorDetail";
import DoctorList from "../pages/client/Doctors/DoctorList";
import Home from "../pages/client/Home";
import Service from "../pages/client/Services/Service";
import ServiceDetail from "../pages/client/Services/ServiceDetail";
import SpecialtyList from "../pages/client/Specialty/SpecialtyList";
import About from "../pages/client/About/About";
import Regulation from "../components/client/sections/Instruct/HospitalRules";
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
      { path: "gioi-thieu", element: <About /> },
      { path: "gioi-thieu/ve-hong-ngoc", element: <About /> },
      { path: "gioi-thieu/huong-dan-khach-hang", element: <Regulation /> },
    ],
  },
];

export default publicRoutes;
