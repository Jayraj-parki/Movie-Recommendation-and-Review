import React, { useEffect, useState } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import CommentIcon from '@mui/icons-material/Comment';
import { useSelector, useDispatch } from "react-redux"
export default function MovieData({ id }) {
    const user = useSelector((state) => state.changeTheUserLog)
    const [like, setLike] = useState(0)
    const [fav, setFav] = useState(0)
    const [review, setReview] = useState(0)
    const [favStatus, setFavStatus] = useState(false)
    const [likeStatus, setLikeStatus] = useState(false)
    // const shareUrl=(e)=>{
    //     e.preventDefault();
    //     console.log(window.location.href)
    //     // console.log(window.clipboardData)
    //     window.clipboardData?.setData('text/plain', 'foo');
    // }
    const countOfLike = async () => {
        try {

            const result = await fetch((`/like/count/byMovie/${id}`), {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            })
            const data = await result.json();
            if (result.status == 200) {
                setLike(data)
            }
            else {
                console.log(data)
            }
        }
        catch (err) {
            console.log("Error in count of liked movie", err)
        }
    }
    const countOfFavMovie = async () => {
        try {

            const result = await fetch((`/favouriteMovie/count/byMovie/${id}`), {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            })
            const data = await result.json();
            if (result.status == 200) {
                setFav(data)
            }
            else {
                console.log(data)
            }
        }
        catch (err) {
            console.log("Error in count of fav movie", err)
        }
    }
    const countReview = async () => {
        try {

            const result = await fetch((`/review/count/byMovie/${id}`), {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            })
            const data = await result.json();
            if (result.status == 200) {
                setReview(data)
            }
            else {
                console.log(data)
            }
        }
        catch (err) {
            console.log("Error in count of review movie", err)
        }
    }
    const checkForFav = async () => {
        try {

            const result = await fetch((`/favouriteMovie/checkForFav`), {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    userId: user?._id,
                    movieId: id
                })
            })
            const data = await result.json();
            if (result.status == 200) {
                setFavStatus(data)
            }
            else {
                console.log(data)
            }
        }
        catch (err) {
            console.log("Error in checking fav movie", err)
        }
    }
    const checkForLiked = async () => {
        try {

            const result = await fetch((`/like/specific/byMovieAndUser/`), {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    userId: user?._id,
                    movieId: id
                })
            })
            const data = await result.json();
            if (result.status == 200) {
                setLikeStatus(data)
            }
            else {
                console.log(data)
            }
        }
        catch (err) {
            console.log("Error in checking liked movie", err)
        }
    }
    const addToLikedMovie = async () => {
        try {

            const result = await fetch((`/like/addToLikedMovie`), {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    userId: user?._id,
                    movieId: id
                })
            })
            const data = await result.json();
            if (result.status == 200) {
                setLike(like+1)
                setLikeStatus(true)
            }
            else {
                console.log(data)
            }
        }
        catch (err) {
            console.log("Error in checking liked movie", err)
        }
    }
    const addToFavMovie = async () => {
        try {

            const result = await fetch((`/favouriteMovie/addToMyFavorutieMovie`), {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    userId: user?._id,
                    movieId: id
                })
            })
            const data = await result.json();
            if (result.status == 200) {
                setFav(fav+1)
                setFavStatus(true)
            }
            else {
                console.log(data)
            }
        }
        catch (err) {
            console.log("Error in checking liked movie", err)
        }
    }
    const removeFromFavMovie = async () => {
        try {

            const result = await fetch((`/favouriteMovie/remove/byMovieAndUser`), {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    userId: user?._id,
                    movieId: id
                })
            })
            const data = await result.json();
            if (result.status == 200) {
                setFav(fav-1)
                setFavStatus(false)
            }
            else {
                console.log(data)
            }
        }
        catch (err) {
            console.log("Error in checking liked movie", err)
        }
    }
    const removeFromLikedMovie = async () => {
        try {

            const result = await fetch((`/like/remove/byMovieAndUser`), {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    userId: user?._id,
                    movieId: id
                })
            })
            const data = await result.json();
            if (result.status == 200) {
                setLike(like-1)
                setLikeStatus(false)
            }
            else {
                console.log(data)
            }
        }
        catch (err) {
            console.log("Error in checking liked movie", err)
        }
    }

    useEffect(() => {
        countReview()
        countOfLike()
        countOfFavMovie()
        checkForFav()
        checkForLiked()
    }, [])
    return (
        <>
            <div className="col-3 col-xxl-auto ">
                <div className="row col-auto mx-auto">
                    {
                        likeStatus ?
                            <span onClick={removeFromLikedMovie} className="col-12 text-center text-primary"><ThumbUpIcon className="pe-auto" role="button" /></span>
                            :
                            <span onClick={addToLikedMovie}  className="col-12 text-center"><ThumbUpIcon className="pe-auto" role="button" /></span>

                    }
                    <span className="col-12 text-center">{like}</span>
                </div>
            </div>
            <div className="col-3 col-xxl-auto ">
                <div className="row col-auto mx-auto">
                    {
                        favStatus ?
                            <span onClick={removeFromFavMovie}  className="col-12 text-center text-danger"><FavoriteIcon className="pe-auto" role="button" /></span>
                            :
                            <span onClick={addToFavMovie}  className="col-12 text-center"><FavoriteIcon className="pe-auto" role="button" /></span>
                    }
                    <span className="col-12 text-center">{fav}</span>
                </div>
            </div> 
            <div className="col-3 col-xxl-auto "> 
                <div className="row col-auto mx-auto">
                    <span className="col-12 text-center"><CommentIcon  /></span>
                    <span className="col-12 text-center">{review}</span>
                </div>
            </div>
            {/* <div className="col-3 col-xxl-auto ">
                <div className="row col-auto mx-auto">
                    <span className="col-12 text-center"><ShareIcon onClick={(e)=>shareUrl(e)} className="pe-auto" role="button" /></span>
                    <span className="col-12 text-center">share</span>
                </div>
            </div> */}

        </>
    )
}
