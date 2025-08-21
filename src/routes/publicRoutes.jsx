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
import Booking from "../pages/client/Books/Booking";
import RecruitmentDetail from "../pages/client/Recruitment/RecruimentDetail";
import AdminLogin from "../pages/admin/AdminLogin";
import HospitalRules from "../components/client/sections/Instruct/HospitalRules";
import HospitalTrainingLanding from "../components/client/sections/Training";
import ResearchPage from "../pages/client/About/ResearchPage";
import BHYTBooking from "../pages/client/Books/BHYTBooking";
import BHYT from "../pages/client/Books/Kiosk/BHYT";

const publicRoutes = [

  {
    path: "/",
    element: <ClientLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "dich-vu", element: <Service /> },
      { path: "dich-vu/:slug", element: <ServiceDetail /> },

      { path: "danh-sach-bac-si", element: <DoctorList /> },
      { path: "bac-si/:slug", element: <DoctorDetail /> },

      { path: "chuyen-khoa", element: <SpecialtyList /> },
      { path: "chuyen-khoa/:slug", element: <SpecitaltyDetail /> },


      { path: "lien-he", element: <Contact /> },

      { path: "tu-van-suc-khoe", element: <HealthAdvisory /> },
      { path: "chi-tiet-bai-tu-van/:slug", element: <HealthDetail /> },

      { index: true, element: <Home /> },
      
      { path: "dich-vu", element: <Service /> },
      { path: "danh-sach-bac-si", element: <DoctorList /> },
      { path: "chuyen-khoa", element: <SpecialtyList /> },
      { path: "chi-tiet-bac-si", element: <DoctorDetail /> },
      { path: "gioi-thieu", element: <About /> },
      { path: "gioi-thieu/ve-hong-ngoc", element: <About /> },
      { path: "gioi-thieu/huong-dan-khach-hang", element: <HospitalRules /> },
      { path: "gioi-thieu/nghien-cuu-khoa-hoc", element: <ResearchPage /> },
      { path: "gioi-thieu/dao-tao", element: <HospitalTrainingLanding /> },


      { path: "lien-he", element: <Contact /> },
      { path: "tu-van-suc-khoe", element: <HealthAdvisory /> },
      { path: "tuyen-dung", element: <Recruitment /> },
      { path: "tuyen-dung/:slug", element:<RecruitmentDetail/>},

      { path: "tin-tuc", element: <News /> },
      {path:"dat-lich", element:<Booking/>},
      {path:"dat-lich-kham-bhyt", element:<BHYTBooking/>},
      {path:"kham-bhyt", element:<BHYT/>},

      // {path:"check-in", element:<CheckinKiosk/>},
      // {path:"kham-dich-vu", element:<ServiceBooking/>},

      { path: "tin-tuc/:slug", element: <NewsDetail /> },
        { path: "dang-nhap", element: <Login />},
            { path: "dang-ky", element: <SignUp />},
    ],
  },
    {
    path: "/admin/dang-nhap",
    element: <AdminLogin />,
  },
];

export default publicRoutes;
