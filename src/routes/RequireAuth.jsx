import { Navigate } from "react-router-dom";

const isAuthenticated = () =>{
    return !!localStorage.getItem("token");
}

const RequireAuth = ({children} ) =>{
    return isAuthenticated() ? children : <Navigate to="/admin/dang-nhap" />
}

export default RequireAuth;