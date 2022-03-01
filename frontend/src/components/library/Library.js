import React,{useState,useEffect} from 'react'
import style from "./library.module.scss"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import StarIcon from '@mui/icons-material/Star';
import { useSelector } from "react-redux"
export default function Library() {
    const user = useSelector((state) => state.changeTheUserLog)
    const [rating,setRating]=useState()
    const [fav,setFav]=useState()
    const [review,setReview]=useState()
    const ratingCount = async () => {
        try {
          const result = await fetch((`/rating/count/byUser/${user?._id}`), {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          })
          const data = await result.json()
          if (result.status==200) {
            setRating(data)
            
          }
        }
        catch (err) {
         console.log("error in count :" + err)
        }
      }
    const favMovCount = async () => {
        try {
          const result = await fetch((`/favouriteMovie/count/byUser/${user?._id}`), {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          })
          const data = await result.json()
          if (result.status==200) {
            setFav(data)
            
          }
        }
        catch (err) {
         console.log("error in count :" + err)
        }
      }
    const reviewCount = async () => {
        try {
          const result = await fetch((`/review/count/byUser/${user?._id}`), {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          })
          const data = await result.json()
          if (result.status==200) {
            setReview(data)
            
          }
        }
        catch (err) {
         console.log("error in count :" + err)
        }
      }
    useEffect(()=>{
        ratingCount()
        favMovCount()
        reviewCount()
    },[])
    return (
       
            <div className={style.library + ' row col-12 mx-auto p-0 py-2 m-0  border rounded'}>
                <span className={style.title + ' row col-12 py-1 mx-auto fs-6 mb-3 border-bottom'}>
                    My library
                </span>
                <div className={style.data + " col-auto  me-lg-auto mx-xxl-auto rounded"}>
                    <div className={style.icon + " col-12 mx-auto"}><StarIcon /></div>
                    <span className="col-12 fs-small">{rating}</span>
                    <p className="col-12 fs-small">movies rated</p>
                </div>
                <div className={style.data + " col-auto  me-lg-auto mx-xxl-auto rounded"}>
                    <div className={style.icon + " col-12 mx-auto"}><FavoriteIcon /></div>
                    <span className="col-12 fs-small">{fav}</span>
                    <p className="col-12 fs-small">favourite movies</p>
                </div>
                <div className={style.data + " col-auto  me-lg-auto mx-xxl-auto rounded"}>
                    <div className={style.icon + " col-12 mx-auto"}><CommentIcon /></div>
                    <span className="col-12 fs-small">{review}</span>
                    <p className="col-12 fs-small">Comments on movies</p>
                </div>

            </div>

        
    )
}
