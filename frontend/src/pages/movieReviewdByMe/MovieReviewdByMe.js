import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReviewesMoviedCollection from '../../components/reviewesMoviedCollection/ReviewesMoviedCollection'
import Sidebar from '../../components/sidebar/Sidebar'
import style from "./movieReviewdByMe.module.scss"
export default function MovieReviewdByMe() {
  return (
    
    <div className={style.setting+" container-fluid p-0"}>
            <div className={style.navbarContainer+" row col-12 mx-auto p-0 sticky-top"}>
                <Navbar/>
            </div>
            <div className={style.content+ " row col-12 mx-auto p-0 "}>
                <Sidebar id={4}/>
                <ReviewesMoviedCollection/>
            </div>            
        </div>
  )
}
