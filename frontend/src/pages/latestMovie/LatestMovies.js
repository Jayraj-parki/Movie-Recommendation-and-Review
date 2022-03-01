import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import style from "./latestMovies.module.scss"
import LatestMovieCollection from '../../components/latestMoviesCollection/LatestMoviesCollection'
export default function LatestMovies() {
    return (
        <div className={style.latest + " container-fluid p-0"}>
            <div className={style.navbarContainer + " row col-12 mx-auto p-0 sticky-top"}>
                <Navbar />
            </div>
            <div className={style.content + " row col-12 mx-auto p-0 "}>
                <Sidebar id={10} />
                <LatestMovieCollection />
            </div>
        </div>
    )
}
