import ClientLayout from "../components/client/layout/ClientLayout";
import Home from "../pages/client/Home";
import Service from "../pages/client/Service";


const publicRoutes = [
    {
        path:'/',
        element:<ClientLayout/>,
        children: [
        {index:true, element:<Home/>},
        {path:'dich-vu', element: <Service/>}
       ]
    },

]

export default publicRoutes