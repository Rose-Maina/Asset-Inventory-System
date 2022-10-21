import React from "react";
import Navbar from "./Navbar";


function Mainpage() {
    return (
        <>
            <div>
                <Navbar/>
            </div>

            <div className="sidebar-container">
                <div className="side-bar"></div>
                <div></div>
            </div>
        </>
    )
}

export default Mainpage;