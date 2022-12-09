import styles from './Navbar.module.scss';
import React from "react";
import {navbarLinks} from "./navbarLinks";
import {NavLink} from "react-router-dom";



const Navbar: React.FC = ()=> {

    return (
        <div className={styles.navbar}>
            {
                navbarLinks.map((link, index)=> {
                    return <NavLink key={index} to={`/${link.path}`} >{link.path.toUpperCase()}</NavLink>
                })
            }
        </div>
    )
}

export default Navbar;