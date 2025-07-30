import AdminLayout from "../components/admin/layout/AdminLayout";
import ClientLayout from "../components/client/layout/ClientLayout";
import Dashboard from "../pages/admin/Dashboard";
import TableExample from "../pages/admin/Service";
import RequireAuth from "./RequireAuth";


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
            }
        ]
    }
]

export default privateRoutes;