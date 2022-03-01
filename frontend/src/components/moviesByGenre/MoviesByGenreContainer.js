import React,{useState,useEffect} from 'react'
import style from "./moviesByGenre.module.scss"

import BackBtn from '../backBtn/BackBtn'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import Genre from '../Genre/Genre';
import HashLoader from "react-spinners/HashLoader";

export default function MoviesByGenreContainer() {
  let [loading, setLoading] = useState(true);
  const [genre,setGenre]=useState()
  const getAllGenre = async () => {
      try {
          const result = await fetch(("/genre/all"), {
              method: "GET",
              headers: {
                  "Content-type": "application/json"
              }
          })
          const data = await result.json();
          if (result.status == 200) {
            setGenre(data)
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
      getAllGenre()
      setTimeout(() => {
        setLoading(false)
      }, 2000)
  }, [])

  
  return (
    <div className={style.genre + " col-12 col-lg-9 sticky-top   border p-3"}>
       {
          loading &&
          <div className={style.loader + " d-flex justify-content-center align-items-center bg-white"}>
            <HashLoader color={"#0984e3"} loading={loading} size={50} />
          </div>
        }
      <div className={style.content + " row  col-12  mx-auto p-3"}>
        <BackBtn />
      </div>
      <div className={style.mainContent+ " row col-12 mx-auto  p-0"}>
        <div className={style.movies + ' row col-12  mx-auto py-3 p-0 my-2 '}>
          <div className={style.metadata + " col-12 d-flex  justify-content-between py-2 shadow-sm"}>
            <span className='my-auto'><DoubleArrowIcon />Movies By Genre</span>
          </div>
          <div className={style.content + "  d-flex justify-content-center align-items-center flex-wrap   p-0 m-0  my-2 "}>
          {genre?.map((val)=><Genre key={val._id} id={val._id} title={val.genre}/>)}
      
          </div>

        </div>
      </div>
    </div>
  )
}
