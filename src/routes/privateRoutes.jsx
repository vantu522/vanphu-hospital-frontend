import AdminLayout from "../components/admin/layout/AdminLayout";
import ClientLayout from "../components/client/layout/ClientLayout";
import Dashboard from "../pages/admin/Dashboard";
import TableExample from "../pages/admin/Service";
import News from "../pages/admin/New";
import RequireAuth from "./RequireAuth";
import Doctors from "../pages/admin/Doctor";
import Specialties from "../pages/admin/Specialty";
import Contact from "../pages/admin/Contact";
import Information from "../pages/admin/Information";
import BookingManagement from "../pages/admin/BookingManagement";
import RecruitmentManagement from "../pages/admin/RecruitmentManagement";
import DoctorSchedule from "../pages/admin/Schedule";
import HealthConsultations from "../pages/admin/HealthConsultation";
import ReceptionManagement from "../pages/admin/ReceptionManagerment";

const privateRoutes = [
    {
        path:'/admin',
        element: (
            <RequireAuth>
                <AdminLayout/>
             </RequireAuth>
        ),
        children: [
            {
                index:true,
                path: '/admin/dashboard',
                element: <Dashboard/>
            },
            {
                index: true,
                path:'/admin/services',
                element: <TableExample/>
            },
            {
                index: true,
                path:'/admin/news',
                element: <News/>    
            },
             {
                index: true,
                path:'/admin/doctors',
                element: <Doctors/>    
            },
              {
                index: true,
                path:'/admin/specialties',
                element: <Specialties/>    
            },
            {
                index: true,
                path:'/admin/contacts',
                element: <Contact/>
            },
            {
                index: true,
                path:'/admin/information',
                element: <Information/>
            },
            {
                index:true,
                path:'/admin/appointments',
                element:<BookingManagement/>
            },
            {
                index:true,
                path:'/admin/recruitments',
                element:<RecruitmentManagement/>
            },
            {
                index:true,
                path:'/admin/doctors/schedule',
                element:<DoctorSchedule/>
            },
            {
                index:true,
                path:"/admin/health-consultations",
                element:<HealthConsultations/>
            },
             {
                index:true,
                path:"/admin/receptions",
                element:<ReceptionManagement/>
            }
        ]
    }
]

export default privateRoutes;