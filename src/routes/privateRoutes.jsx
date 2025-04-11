import AdminLayout from "../components/admin/layout/AdminLayout";
import ClientLayout from "../components/client/layout/ClientLayout";
import Dashboard from "../pages/admin/Dashboard";
import RequireAuth from "./RequireAuth";


const privateRoutes = [
    {
        path:'/dashboard',
        element: (
            <RequireAuth>
                <AdminLayout/>
            </RequireAuth>
        ),
        children: [
            {
                index:true,
                element: <Dashboard/>
            }
        ]
    }
]

export default privateRoutes;