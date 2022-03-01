import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import style from "./allMovieByGnere.module.scss"
import AllMovie from '../../components/allMovieByGenre/AllMovie'
export default function AllMovieByGenre() {
    return (
        <div className={style.allMovie + " container-fluid p-0"}>
            <div className={style.navbarContainer + " row col-12 mx-auto p-0 sticky-top"}>
                <Navbar />
            </div>
            <div className={style.content + " row col-12 mx-auto p-0 "}>
                <Sidebar id={14} />
                <AllMovie />
            </div>
        </div>
    )
}
