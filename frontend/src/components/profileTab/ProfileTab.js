import React from 'react'
import style from "./profileTab.module.scss"
export default function ProfileTab() {
    return (
        <div className={style.profileTab + " row col-12 mx-auto border-bottom p-0"}>
            <div className="col-12 d-flex justify-content-start align-items-center  p-1">
                <img className="bg-dark col-auto" src="/images/1.png" alt="" />
                <h5 className=" col-auto my-auto ms-2">Jayraj Parki</h5>
            </div>
        </div>
    )
}
