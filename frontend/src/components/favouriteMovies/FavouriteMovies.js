import React, { useState, useEffect } from 'react'
import BackBtn from '../backBtn/BackBtn'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import MovieCard from '../movieCard/MovieCard'
import style from "./favouriteMovies.module.scss"
import { useSelector } from "react-redux"

import HashLoader from "react-spinners/HashLoader";

export default function FavouriteMovies() {
  const user = useSelector((state) => state.changeTheUserLog)
  let [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null)
  const getFavMovies = async () => {
    try {

      const result = await fetch((`/favouriteMovie/all/byUser/${user?._id}`), {
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
        console.log(data.err)
      }
    }
    catch (err) {
      console.log("Error in latest movie", err)
    }
  }
  useEffect(() => {
    getFavMovies()

  }, [])
  useEffect(() => {
    if (movie) {
      setLoading(false)
    }
  }, [movie])
  return (
    <div className={style.favMovie + " col-12 col-lg-9 sticky-top   border p-3"}>
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
            <span className='my-auto'><DoubleArrowIcon /> My Favourite Movies</span>
          </div>
          <div className={style.content + "  d-flex justify-content-center align-items-center flex-wrap   p-0 m-0  my-2 "}>
            {
              movie?.length <= 0 ?
                <div className="alert alert-danger  my-2 col-10" role="alert">
                 Opps! No favourite Movie Available Right Now.  
                </div>
                :
                <>
                  {
                    movie?.map((val) => {
                      return (
                        <MovieCard key={val._id} path={val.poster} title={val.title} id={val._id} />
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
