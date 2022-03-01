import React, { useState, useEffect } from 'react'
import style from "./ratedMovies.module.scss"

import BackBtn from '../backBtn/BackBtn'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import MovieCard from '../movieCard/MovieCard'
import { useSelector } from "react-redux"

import HashLoader from "react-spinners/HashLoader";
export default function RatedMovies() {
  let [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.changeTheUserLog)
  const [movie, setMovie] = useState(null)
  const getRatedMovie = async () => {
    try {

      const result = await fetch((`/rating/specific/movieName/byUser/${user?._id}`), {
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
    getRatedMovie()

  }, [])
  useEffect(() => {
    if (movie) {
      setLoading(false)
    }
  }, [movie])
  return (
    <div className={style.rated + " col-12 col-lg-9 sticky-top   border p-3"}>
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
            <span className='my-auto'><DoubleArrowIcon /> My Rating for Movies</span>
          </div>
          <div className={style.content + "  d-flex justify-content-center align-items-center flex-wrap   p-0 m-0  my-2 "}>
            {
              movie?.length <= 0 ?
                <div className="alert alert-danger  my-2 col-10 text-center mx-auto" role="alert">
                  You Have Not Rated Any Movie Yet!
                </div>
                :
                <>
                  {
                    movie?.map((val) => {
                      return (
                        <MovieCard status={true} rate={val.rate} key={val?.movie?._id} path={val?.movie?.poster} title={val.movie?.title} id={val.movie?._id} />
                      )
                    })
                  }
                </>
            }
          </div>

        </div>
      </div>
    </div>
  )
}
