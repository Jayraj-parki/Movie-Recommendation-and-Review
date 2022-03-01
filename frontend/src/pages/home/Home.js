import React from 'react'
import style from "./Home.module.scss"
import Navbar from '../../components/homeComponents/navbar/Navbar'
import HomeScreen from '../../components/homeComponents/homeScreen/HomeScreen'
import MovieCard from '../../components/homeComponents/movieLanguageCards/MovieCard'
import DataCountingCard from '../../components/homeComponents/DataCountingCard/DataCountingCard'
import Susbscription from '../../components/homeComponents/Subscription/Susbscription'
import Footer from '../../components/homeComponents/footer/Footer'
export default function Home() {
  return (
    <>
      <div className={style.homePage + " container-fluid p-0 m-0"}>
        {/* <Navbar /> */}
        <div className={style.container + " row-col-12 m-0 p-0 mx-auto"}>
          <HomeScreen />
          <MovieCard />
          <hr className='text-dark col-10 mx-auto my-3' />
          <DataCountingCard />
          <hr className='text-dark col-10 mx-auto my-3' />
          <Footer/>
        </div>
      </div>
    </>
  )
}