import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import style from "./mostLiked.module.scss"
import MostLikedMovie from '../../components/mostLikedMovie/MostLikedMovie'
export default function MostLiked() {
    return (
        <div className={style.liked + " container-fluid p-0"}>
            <div className={style.navbarContainer + " row col-12 mx-auto p-0 sticky-top"}>
                <Navbar />
            </div>
            <div className={style.content + " row col-12 mx-auto p-0 "}>
                <Sidebar id={11} />
                <MostLikedMovie />
            </div>
        </div>
    )
}
