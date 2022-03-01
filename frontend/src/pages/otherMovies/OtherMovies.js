import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import style from "./otherMovies.module.scss"
import OtherMoviesCollection from '../../components/otherMoviesCollection/OtherMoviesCollection'
export default function OtherMovies() {
    return (
        <div className={style.other + " container-fluid p-0"}>
            <div className={style.navbarContainer + " row col-12 mx-auto p-0 sticky-top"}>
                <Navbar />
            </div>
            <div className={style.content + " row col-12 mx-auto p-0 "}>
                <Sidebar id={15} />
                <OtherMoviesCollection />
            </div>
        </div>
    )
}
