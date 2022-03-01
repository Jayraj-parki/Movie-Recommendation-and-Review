import React from 'react'
import Navbar from "../../components/navbar/Navbar"
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import style from "./user.module.scss"
export default function User() {
  return (
    <>
        <div className={style.user+" container-fluid p-0"}>
            <div className={style.navbarContainer+" row col-12 mx-auto p-0 sticky-top"}>
                <Navbar/>
            </div>
            <div className={style.content+ " row col-12 mx-auto p-0 "}>
                <Sidebar id={2}/>
                <Feed/>
            </div>            
        </div>
    </>
  )
} 
