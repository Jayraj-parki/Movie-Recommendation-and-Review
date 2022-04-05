import React from 'react'
import style from "./profileTab.module.scss"
import { useSelector } from "react-redux"
export default function ProfileTab() {
    const user = useSelector((state) => state.changeTheUserLog)
    return (
        <div className={style.profileTab + " row col-12 mx-auto border-bottom p-0"}>
            <div className="col-12 d-flex justify-content-start align-items-center  p-1">
                <img className="bg-dark col-auto" src={user.profile || "/images/1.png"} alt="" />
                <h5 className=" col-auto my-auto ms-2">{user.username}</h5>
            </div>
        </div>
    )
}
