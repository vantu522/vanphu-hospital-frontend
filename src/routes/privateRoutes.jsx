import AdminLayout from "../components/admin/layout/AdminLayout";
import ClientLayout from "../components/client/layout/ClientLayout";
import Dashboard from "../pages/admin/Dashboard";
import TableExample from "../pages/admin/Service";
import News from "../pages/admin/New";
import RequireAuth from "./RequireAuth";
import Doctors from "../pages/admin/Doctor";
import Specialties from "../pages/admin/Specialty";
import Contact from "../pages/admin/Contact";

const privateRoutes = [
    {
        path:'/admin',
        element: (
            // <RequireAuth>
                <AdminLayout/>
            // </RequireAuth>
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
            }
        ]
    }
]

export default privateRoutes;