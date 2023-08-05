import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";


const Layout: React.FC = () => {

    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <div>
                    <Sidebar />
                </div>
                <div>
                    <Outlet />
                </div>

            </div>
        </>
    )
}


export default Layout;