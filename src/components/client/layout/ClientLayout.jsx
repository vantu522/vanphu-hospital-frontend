import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

const ClientLayout = () => {
    return (
        <>
            <Header/>
            <main className="p-1">
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}


export default ClientLayout