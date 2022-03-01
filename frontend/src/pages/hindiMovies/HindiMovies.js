import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import style from "./hindiMovies.module.scss"
import HindiMoviesCollection from '../../components/HindiMoviesCollection/HindiMoviesCollection'
export default function HindiMovies() {
    return (
        <div className={style.hindi + " container-fluid p-0"}>
            
            <div className={style.navbarContainer + " row col-12 mx-auto p-0 sticky-top"}>
                <Navbar />
            </div>
            <div className={style.content + " row col-12 mx-auto p-0 "}>
                <Sidebar id={13} />
                <HindiMoviesCollection />
            </div>
        </div>
    )
}
