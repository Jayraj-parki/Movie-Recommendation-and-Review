import React from 'react'
import style from "./reviewMsg.module.scss"
export default function ReviewMsg({user,text}) {
    return (
        <div className={style.review + " col-12 col-lg-10 shadow my-2 border p-0"}>
            <div className={style.username+ " col-12 border-bottom  p-2 ps-4"}>{user}</div>
            <div className="col-12 p-3">{text}</div>
        </div>
    )
}
