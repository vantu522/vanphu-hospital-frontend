import ClientLayout from "../components/client/layout/ClientLayout";
import DoctorList from "../pages/client/Doctors/DoctorList";
import Home from "../pages/client/Home";
import Service from "../pages/client/Services/Service";
import ServiceDetail from "../pages/client/Services/ServiceDetail";
import SpecialtyList from "../pages/client/Specialty/SpecialtyList";
const publicRoutes = [
    {
        path:'/',
        element:<ClientLayout/>,
        children: [
        {index:true, element:<Home/>},
        {path:'dich-vu', element: <Service/>},
        {path:'chi-tiet-dich-vu',element:<ServiceDetail/>},
        {path:'danh-sach-bac-si',element:<DoctorList/>},
        {path:'chuyen-khoa',element:<SpecialtyList/>}
       ]
    },

]

export default publicRoutes