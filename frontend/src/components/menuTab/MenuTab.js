import React from 'react'
import style from "./menuTab.module.scss"
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'
export default function MenuTab({ status, title, icon,path }) {
    return (
        <NavLink to={path} className={style.menuLink}>
            <Button id={status ? style.active:"false"} className={style.menuTab + "  row col-12 mx-auto px-2 py-2"}>
                <div className={style.content + " col-12 d-flex justify-content-start align-items-center  p-1"}>
                    {icon}
                    <span className=" col-auto my-auto ms-2">{title}</span>
                </div>
            </Button>
        </NavLink>
    )
}
