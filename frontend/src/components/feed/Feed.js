import React,{useState,useEffect} from 'react'
import style from "./feed.module.scss"
import TopRated from '../topRated/TopRated';
import LatestMovie from '../latestMovie/LatestMovie';
import Genre from '../Genre/Genre';

import HashLoader from "react-spinners/HashLoader";

export default function Feed() {
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
    <>
      <div className={style.feed + " col-12 col-lg-9  sticky-top   p-1"}>
      {
          loading &&
          <div className={style.loader + " d-flex justify-content-center align-items-center bg-white"}>
            <HashLoader color={"#0984e3"} loading={loading} size={50} />
          </div>
        }
        <TopRated />
        <LatestMovie />
        {genre?.map((val)=><Genre key={val?._id} id={val?._id} title={val?.genre}/>)}
      </div>
    </>
  )
}

/*


 <div className=' col-12 d-flex justify-content-start align-items-center mx-auto px-1'>
                <IconButton className="p-1"><ThumbUpAltIcon /></IconButton>
                <IconButton className="p-1"><ThumbDownIcon /></IconButton>
                <IconButton className="p-1"><FavoriteIcon /></IconButton>
                <span className='ms-auto'>345 <CommentIcon /></span>
              </div> 

*/
