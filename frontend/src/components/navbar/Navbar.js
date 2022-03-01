import React from 'react'
import style from "./navbar.module.scss"
import { NavLink } from "react-router-dom"
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchBar from '../searchBar/SearchBar';
import Avatar from '../avatar/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import IconButton  from '@mui/material/IconButton';
import { Button } from '@mui/material';
export default function Navbar() {
  
  return (
    <>
         <nav className={style.navbar+ " navbar navbar-expand-lg shadow-sm  mx-auto "}>
                <div className={style.navbarContainer+ " container-fluid px-1 px-lg-3 "}>
                   <IconButton className="d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><MenuIcon/></IconButton>
                    <NavLink className={style.logo+ " navbar-brand me-auto"} to="/">MovieGram<span className="mb-1"><LiveTvIcon/></span></NavLink>
                    <IconButton className={style.navbarToggler+ " navbar-toggler border-0"} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon p-1"><SearchIcon className="m-auto"/></span>
                    </IconButton>
                    <div className={style.collapse+ " collapse  navbar-collapse "} id="navbarSupportedContent">
                        <div className={style.container+" row col-12 mx-auto  ms-lg-auto"}>
                            <SearchBar/>
                            <Avatar/>
                        </div>
                    </div>
                </div>
            </nav> 
    </>

  )
}
