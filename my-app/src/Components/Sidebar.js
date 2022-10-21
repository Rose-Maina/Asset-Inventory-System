import React from "react";
import {SidebarData} from './SidebarData';
import {NavLink} from 'react-router-dom';


function Sidebar() {
    
    return (
        <>
        <div className="sidebar-details">
            {SidebarData.map((val, key)=>{
                    return(
                        <div key={key}>
                            <NavLink to={val.path}
                               className="row"
                               id={window.location.pathname === val.path ? "active" : ""}                     
                            >
                            <div>{val.icon}</div>
                            <div>{val.title}</div>
                            </NavLink>
                            
                        </div>
                    )
                })
            }
  
        </div>
        </>
    )
}

export default Sidebar;