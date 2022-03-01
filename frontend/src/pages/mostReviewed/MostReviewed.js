import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import style from "./mostReviewed.module.scss"
import MostReviewedMovie from '../../components/mostReviewedMovie/MostReviewedMovie'
export default function MostReviewed() {
    return (
        <div className={style.reviewed + " container-fluid p-0"}>
            <div className={style.navbarContainer + " row col-12 mx-auto p-0 sticky-top"}>
                <Navbar />
            </div>
            <div className={style.content + " row col-12 mx-auto p-0 "}>
                <Sidebar id={9} />
                <MostReviewedMovie />
            </div>
        </div>
    )
}
