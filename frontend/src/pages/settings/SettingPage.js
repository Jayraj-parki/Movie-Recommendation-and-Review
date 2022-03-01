import React from 'react'
import Navbar from "../../components/navbar/Navbar"
import Sidebar from '../../components/sidebar/Sidebar'
import style from "./setting.module.scss"
import Setting from '../../components/setting/Setting'
export default function SettingPage() {
  return (
    <>
        <div className={style.setting+" container-fluid p-0"}>
            <div className={style.navbarContainer+" row col-12 mx-auto p-0 sticky-top"}>
                <Navbar/>
            </div>
            <div className={style.content+ " row col-12 mx-auto p-0 "}>
                <Sidebar id={7}/>
                <Setting/>
            </div>            
        </div>
    </>
  )
}
    