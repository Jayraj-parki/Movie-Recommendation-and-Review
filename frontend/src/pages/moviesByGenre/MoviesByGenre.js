import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import style from "./moviesByGenre.module.scss"
import MoviesByGenreContainer from '../../components/moviesByGenre/MoviesByGenreContainer'
export default function MoviesByGenre() {
    return (
        <div className={style.byGenre + " container-fluid p-0"}>
            <div className={style.navbarContainer + " row col-12 mx-auto p-0 sticky-top"}>
                <Navbar />
            </div>
            <div className={style.content + " row col-12 mx-auto p-0 "}>
                <Sidebar id={12} />
                <MoviesByGenreContainer />
            </div>
        </div>
    )
}
