import React, { useState, useEffect } from 'react'
import style from "./mostLiked.module.scss"

import BackBtn from '../backBtn/BackBtn'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import MovieCard from '../movieCard/MovieCard'

import HashLoader from "react-spinners/HashLoader";

export default function MostLikedMovie() {
  let [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null)
  const getMostLikedMovies = async () => {
    try {

      const result = await fetch(("/like/mostLiked"), {
        method: "GET",
        headers: {
          "Content-type": "application/json"
        }
      })
      const data = await result.json();
      if (result.status == 200) {
        // console.log(data)
        setMovie(data)
      }
      else {
        console.log(data)
      }
    }
    catch (err) {
      console.log("Error in latest movie", err)
    }
  }
  useEffect(() => {
    getMostLikedMovies()

  }, [])
  useEffect(() => {
    if (movie) {
      setLoading(false)
    }
  }, [movie])
  return (
    <div className={style.liked + " col-12 col-lg-9 sticky-top   border p-3"}>
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
            <span className='my-auto'><DoubleArrowIcon /> Most Liked Movies</span>
          </div>
          <div className={style.content + "  d-flex justify-content-center align-items-center flex-wrap   p-0 m-0  my-2 "}>
            {
              movie?.map((val) => {
                return (
                  <MovieCard key={val.movie._id} path={val?.movie.poster} title={val.movie.title} id={val.movie._id} />
                )
              })
            }
          </div>

        </div>
      </div>
    </div>
  )
}
