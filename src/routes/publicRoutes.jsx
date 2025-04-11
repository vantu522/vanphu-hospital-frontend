import ClientLayout from "../components/client/layout/ClientLayout";
import Home from "../pages/client/Home";


const publicRoutes = [
    {
        path:'/',
        element:<ClientLayout/>,
        children: [
        {index:true, element:<Home/>}
       ]
    },

]

export default publicRoutes