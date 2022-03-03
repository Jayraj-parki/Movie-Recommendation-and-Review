import React from 'react'
import style from "./Navbar.module.scss"
import { NavLink } from "react-router-dom"
import LiveTvIcon from '@mui/icons-material/LiveTv';
import IconButton from '@mui/material/IconButton';
import {HashLink as Link } from "react-router-hash-link"
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() { 
    return (
        <>
            <nav className={style.navbar+ " navbar navbar-expand-lg sticky-top"}>
                <div className={style.navbarContainer+ " container-fluid"}>
                    <NavLink className={style.logo+ " navbar-brand"} to="/">MovieGram<IconButton className="text-light"><LiveTvIcon/></IconButton></NavLink>
                    
                    <button className={style.navbarToggler+ " navbar-toggler "} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-light fs-4"><MenuIcon/></span>
                    </button>
                    <div className={style.collapse+ "  collapse navbar-collapse"} id="navbarSupportedContent">
                        <ul className=" row col-auto d-flex ms-md-auto  my-auto">
                            <li className={style.btns + " col-auto my-auto me-md-2"}>
                                <Link smooth to="/" className={style.homeBtn + ' mx-md-1 px-3 py-2'}>Home</Link>
                            </li>
                            <li className={style.btns + " col-auto my-auto me-md-2"}>
                                <Link smooth to="#footer" className={style.homeBtn + ' mx-md-1 px-3 py-2'}>Contact</Link>
                            </li>
                            <li className={style.btns + " col-auto my-auto me-md-2"}>
                                <Link smooth to="/#footer" className={style.homeBtn + ' mx-md-1 px-3 py-2'}>About</Link>
                            </li>
                            <li className={style.btns + " col-auto my-auto me-md-2"}>
                                <Link smooth to="/#login" className={style.SignUpBtn + " mx-md-1 px-3 py-2"}>Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
