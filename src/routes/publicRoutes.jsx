import ClientLayout from "../components/client/layout/ClientLayout";
import Home from "../pages/client/Home";
import Service from "../pages/client/Services/Service";
import ServiceDetail from "../pages/client/Services/ServiceDetail";


const publicRoutes = [
    {
        path:'/',
        element:<ClientLayout/>,
        children: [
        {index:true, element:<Home/>},
        {path:'dich-vu', element: <Service/>},
        {path:'chi-tiet-dich-vu',element:<ServiceDetail/>}
       ]
    },

]

export default publicRoutes