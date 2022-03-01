import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./avatar.module.scss"
export default function Avatar() {
    return (
        <NavLink to="/profile" className={style.avatar + " col-auto text-decoration-none d-none d-lg-flex  p-0 "}>
            <img src="/images/1.png" alt="" />
        </NavLink>
    )
}
