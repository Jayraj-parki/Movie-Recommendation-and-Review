import React, { useEffect, useState } from 'react'
import SpecificMovieInformation from '../../components/movieInformation/SpecificMovieInformation'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import style from "./movie.module.scss"
import { useParams,useNavigate } from 'react-router-dom'

export default function Movie() {
  const { id } = useParams()
  const navigate=useNavigate()
  const [check, setCheck] = useState(false)
  const checkForMovieId = async () => {
    try {

      const result = await fetch((`/movie/specific/${id}`), {
        method: "GET",
        headers: {
          "Content-type": "application/json"
        }
      })
      const data = await result.json();
      if (result.status == 200) {
        setCheck(true)
      }
      else {
        setCheck(false)
        navigate("/error")
        console.log(data.err)
      }
    }
    catch (err) {
      navigate("/error")
      setCheck(false)
      console.log("Error in checking movie", err)
    }
  }
  useEffect(() => {
    checkForMovieId()
  }, [id])
  return (

    <div className={style.movie + " container-fluid p-0"}>
      <div className={style.navbarContainer + " row col-12 mx-auto p-0 sticky-top"}>
        <Navbar />
      </div>
      <div className={style.content + " row col-12 mx-auto p-0 "}>
        <Sidebar id={0} />
        {
          check && <SpecificMovieInformation id={id} />
        }
      </div>
    </div>
  )
}
