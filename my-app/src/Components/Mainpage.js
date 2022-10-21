import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";


function Mainpage() {
    return (
        <>
            <div>
                <Navbar/>
            </div>

            <div className="sidebar-container">
                <div className="side-bar">
                    <Sidebar/>
                </div>
            </div>
        </>
    )
}

export default Mainpage;