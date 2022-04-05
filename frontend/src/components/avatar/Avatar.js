import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./avatar.module.scss"
import { useSelector } from "react-redux"
export default function Avatar() {
    const user = useSelector((state) => state.changeTheUserLog)
    
    return (
        <NavLink to="/profile" className={style.avatar + " col-auto text-decoration-none d-none d-lg-flex  p-0 "}>
            <img src={user.profile || "/images/1.png"} alt="" />
        </NavLink>
    )
}
