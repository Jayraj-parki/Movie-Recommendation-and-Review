import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import style from "./favouriteMovies.module.scss"
import FavouriteMovies from '../../components/favouriteMovies/FavouriteMovies'

export default function MyFavouriteMovies() {
   

    return (
        <div className={style.favMovie + " container-fluid p-0"}>
            <div className={style.navbarContainer + " row col-12 mx-auto p-0 sticky-top"}>
                <Navbar />
            </div>
            <div className={style.content + " row col-12 mx-auto p-0 "}>
                <Sidebar id={3} />
                <FavouriteMovies />

            </div>
        </div>
    )
}
