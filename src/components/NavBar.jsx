import React from "react";
import {Link, useResolvedPath,useMatch} from "react-router-dom"

function Navbar(){
    return(

        <nav className="nav">
            <Link to="/" className="titlu"> Bootcamp</Link>
            <ul>
                <li>
                    <CustomLink to="/Groups">Grupuri</CustomLink>
                </li>
                <li>
                    <CustomLink to="/Profile">Profil</CustomLink>
                </li>
                <li>
                    <CustomLink to="/WishLists">WishList-uri</CustomLink>
                </li>
                <li>
                    <CustomLink to="/Items">Inventar</CustomLink>
                </li>
            </ul>
        </nav>
    )
}
function CustomLink({to,children}){
    const resolvedPath=useResolvedPath(to)
    const isActive=useMatch({path:resolvedPath.pathname})
    return(
        
            <Link to={to}>
                {children}
            </Link>
       
    )
}
export default Navbar;