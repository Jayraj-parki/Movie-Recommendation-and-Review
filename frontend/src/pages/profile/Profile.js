import React from 'react'
import Navbar from "../../components/navbar/Navbar"
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import style from "./profile.module.scss"
import ProfileData from '../../components/profileData/ProfileData'
export default function Profile() {
  return (
    <>
        <div className={style.profile+"  container-fluid p-0"}>
            <div className={style.navbarContainer+" row col-12 mx-auto p-0 sticky-top"}>
                <Navbar/>
            </div>
            <div className={style.content+ " row col-12 mx-auto p-0 "}>
                <Sidebar id={1}/>
                <ProfileData/>
            </div>            
        </div>
    </>
  )
}
