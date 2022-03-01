import { Button } from '@mui/material'
import React from 'react'
import style from "./profileImage.module.scss"
export default function ProfileImage() {
    return (
        <div className={style.profileImg + " col-12 col-lg-6 col-xxl-3  p-2 mx-auto"}>
            <div className={style.wrapper + " row col-12 mx-auto p-0 "}>
                <div className={style.profileImage + " col-12 mx-auto p-0 m-0"}>
                    <img src="/images/1.png" className=" mx-auto" alt="" />
                </div>
                <Button className="col-12 mx-auto my-2 ">Change Photo</Button>
            </div>
        </div>
    )
}
 