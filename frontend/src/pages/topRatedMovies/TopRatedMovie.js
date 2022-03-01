import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import style from "./topRated.module.scss"
import TopRatedMovies from '../../components/topRatedMovies/TopRatedMovies'
export default function TopRatedMovie() {
    return (
        <div className={style.topRated + " container-fluid p-0"}>
            <div className={style.navbarContainer + " row col-12 mx-auto p-0 sticky-top"}>
                <Navbar />
            </div>
            <div className={style.content + " row col-12 mx-auto p-0 "}>
                <Sidebar id={8} />
                <TopRatedMovies />
            </div>
        </div>
    )
}
