import React, { useState, useEffect } from 'react'
import style from "./topRatedMovies.module.scss"

import BackBtn from '../backBtn/BackBtn'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import MovieCard from '../movieCard/MovieCard'

import HashLoader from "react-spinners/HashLoader";

export default function TopRatedMovies() {
  let [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null)
  const getTopRatedMovies = async () => {
    try {

      const result = await fetch(("/movie/topRatedMovies/all"), {
        method: "GET",
        headers: {
          "Content-type": "application/json"
        }
      })
      const data = await result.json();
      if (result.status == 200) {
        
        setMovie(data)
      }
      else {
        console.log(data.err)
      }
    }
    catch (err) {
      console.log("Error in Top Rated movie", err)
    }
  }
  useEffect(() => {
    getTopRatedMovies()

  }, [])
  useEffect(() => {
    if (movie) {
      setLoading(false)
    }
  }, [movie])
  return (
    <div className={style.topRated + " col-12 col-lg-9 sticky-top   border p-3"}>
      {
        loading &&
        <div className={style.loader + " d-flex justify-content-center align-items-center bg-white"}>
          <HashLoader color={"#0984e3"} loading={loading} size={50} />
        </div>
      }
      <div className={style.content + " row  col-12  mx-auto p-3"}>
        <BackBtn />
      </div>
      <div className={style.mainContent + " row col-12 mx-auto  p-0"}>
        <div className={style.movies + ' row col-12  mx-auto py-3 p-0 my-2 '}>
          <div className={style.metadata + " col-12 d-flex  justify-content-between"}>
            <span className='my-auto'><DoubleArrowIcon /> Top Rated Movies</span>
          </div>
          <div className={style.content + "  d-flex justify-content-center align-items-center flex-wrap   p-0 m-0  my-2 "}>
            {
              movie?.map((val, idx) => {
                return (<MovieCard  path={val?.movie?.poster} key={idx} id={val?.movie?._id} rate={val.rate} title={val?.movie?.title} status={true} />)
              })
            }
          </div>

        </div>
      </div>
    </div>
  )
}
