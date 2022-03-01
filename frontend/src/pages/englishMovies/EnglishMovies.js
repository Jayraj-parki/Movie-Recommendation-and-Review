import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import style from "./englishMovies.module.scss"
import EnglishMoviesCollection from '../../components/englishMoviesCollection/EnglishMoviesCollection'
export default function EnglishMovies() {
    return (
        <div className={style.english + " container-fluid p-0"}>
            <div className={style.navbarContainer + " row col-12 mx-auto p-0 sticky-top"}>
                <Navbar />
            </div>
            <div className={style.content + " row col-12 mx-auto p-0 "}>
                <Sidebar id={14} />
                <EnglishMoviesCollection />
            </div>
        </div>
    )
}
