import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import style from "./myRecommendedMovies.module.scss"
import RecommendedMovies from '../../components/recommendedMovies/RecommendedMovies'
export default function MyRecommendedMovies() {
    return (
        <div className={style.recommendedMovie + " container-fluid p-0"}>
            <div className={style.navbarContainer + " row col-12 mx-auto p-0 sticky-top"}>
                <Navbar />
            </div>
            <div className={style.content + " row col-12 mx-auto p-0 "}>
                <Sidebar id={6} />
                <RecommendedMovies />
            </div>
        </div>
    )
}
