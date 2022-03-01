import React from 'react'
import RatedMovies from '../../components/myRatedMovies/RatedMovies'

import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import style from "./myRatedMovies.module.scss"

export default function MyRatedMovies() {
    return (
        <div className={style.rated + " container-fluid p-0"}>
            <div className={style.navbarContainer + " row col-12 mx-auto p-0 sticky-top"}>
                <Navbar />
            </div>
            <div className={style.content + " row col-12 mx-auto p-0 "}>
                <Sidebar id={5} />
                <RatedMovies />
            </div> 
        </div>
    )
}
