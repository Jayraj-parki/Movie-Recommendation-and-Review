import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import style from "./movieInformation.module.scss"
import BackBtn from '../backBtn/BackBtn';
import MovieCard from "../movieCard/MovieCard"
import StarIcon from '@mui/icons-material/Star';

import StarProgressBar from '../starProgressBar/StarProgressBar';
import MovieData from '../movieData/MovieData';
import MovieDetails from '../movieDetails/MovieDetails';
import ReviewContainer from '../reviewContainer/ReviewContainer';

import { useSelector } from "react-redux"
import HashLoader from "react-spinners/HashLoader";


export default function SpecificMovieInformation({ id }) {
    let [loading, setLoading] = useState(true);
    const user = useSelector((state) => state.changeTheUserLog)
    const [movie, setMovie] = useState(null)
    const [rate, setRate] = useState()
    const [grpRate, setGrpRate] = useState()
    const [movieRate, setMovieRate] = useState(null)
    const [activeBtn, setActiveBtn] = useState(0)
    const [refreshNow, setRefreshNow] = useState(false)
    const getMovieData = async () => {
        try {

            const result = await fetch((`/movie/specific/${id}`), {
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
            console.log("Error in latest movie", err)
        }
    }
    const getAvgRating = async () => {
        try {

            const result = await fetch((`/rating/avgRating/byMovie/${id}`), {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            })
            const data = await result.json();
            if (result.status == 200) {
                // console.log(data)
                setRate(data)
            }
            else {
                console.log(data)
            }
        }
        catch (err) {
            console.log("Error in latest movie", err)
        }
    }
    const getGrpRating = async () => {
        try {

            const result = await fetch((`/rating/grpRating/byMovie/${id}`), {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            })
            const data = await result.json();
            if (result.status == 200) {
                // console.log(data)
                setGrpRate(data)
            }
            else {
                console.log(data)
            }
        }
        catch (err) {
            console.log("Error in latest movie", err)
        }
    }
    const getRatingForMovie = async () => {
        try {

            const result = await fetch((`/rating/specific/byMovieAndUser`), {
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
                setMovieRate(data)
            }
            else {
                console.log(data)
            }
        }
        catch (err) {
            console.log("Error in latest movie", err)
        }
    }
    const addRatingForMovie = async (rate) => {
        try {

            const result = await fetch((`/rating/add`), {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    userId: user?._id,
                    movieId: id,
                    rate: rate
                })
            })
            const data = await result.json();
            if (result.status == 200) {

                setMovieRate(rate)
                setRefreshNow(!refreshNow)

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
        getMovieData()
    }, [id])
    useEffect(() => {
        getAvgRating()
        getGrpRating()
        getRatingForMovie()
    }, [refreshNow,id])
    useEffect(() => {
        if (movie) {
            setLoading(false)
        }
    }, [movie])
    return (
        <div className={style.movie + " col-12 col-lg-9 sticky-top   border p-3"}>
            {
                loading &&
                <div className={style.loader + " d-flex justify-content-center align-items-center bg-white"}>
                    <HashLoader color={"#0984e3"} loading={loading} size={50} />
                </div>
            }
            <div className={style.content + " row  col-12 shadow mx-auto p-3"}>
                <BackBtn />
                <div className="row col-12 mx-auto  p-3">
                    <div className="col-auto mx-auto d-flex">
                        {/* <MovieCard  path={movie?.poster} title={movie.title} id={movie._id} /> */}
                        <MovieCard path={movie?.poster} title={movie?.title} id={movie?._id} />
                    </div>
                    <hr className="d-md-none my-2" />
                    <div className="col-12 col-md-8">
                        <div className="row col-12 mx-auto">
                            <p>{rate?.rate?.toFixed(1)}<StarIcon className="fs-6" /> average based on {rate?.countA} reviews.</p>
                        </div>
                        <div className="row  col-xl-12 mx-auto mb-3">
                            {
                                grpRate?.map((val) => {
                                    return (
                                        <StarProgressBar key={val?._id} width={`${((val?.countA) * 100) / rate?.countA}%`} star={val?._id} />
                                    )
                                })
                            }

                        </div>
                        <hr className="d-md-none my-2 mb-3" />
                        <div className="row col-12 mx-auto my-2 ">
                            <MovieData id={id} />
                        </div>
                        <hr className="d-md-none my-2" />
                        <div className="row col-12 mx-auto my-2 ">
                            <div className="col-12">
                                <span className='text-center m-auto  fs-5'>Your Rating : {movieRate?.rate || "N/A"}<StarIcon className=" text-dark  my-auto " /></span>
                            </div>
                        </div>
                        <div className="row col-12 mx-auto my-2 ">
                            {!movieRate?.rate &&
                                <>
                                    <div className={style.startBtns + " col-md-12 col-lg-auto mb-3"}>
                                        <Button id={activeBtn === 1 ? style.active : "off"} onClick={() => setActiveBtn(1)} className='col-auto border fs-6 me-1'>1<StarIcon className="text-warning" /></Button>
                                        <Button id={activeBtn === 2 ? style.active : "off"} onClick={() => setActiveBtn(2)} className='col-auto border fs-6 me-1'>2<StarIcon className="text-warning" /></Button>
                                        <Button id={activeBtn === 3 ? style.active : "off"} onClick={() => setActiveBtn(3)} className='col-auto border fs-6 me-1'>3<StarIcon className="text-warning" /></Button>
                                        <Button id={activeBtn === 4 ? style.active : "off"} onClick={() => setActiveBtn(4)} className='col-auto border fs-6 me-1'>4<StarIcon className="text-warning" /></Button>
                                        <Button id={activeBtn === 5 ? style.active : "off"} onClick={() => setActiveBtn(5)} className='col-auto border fs-6 me-1'>5<StarIcon className="text-warning" /></Button>
                                    </div>
                                    <div className="col-auto ">
                                        <Button onClick={() => addRatingForMovie(activeBtn)} className="bg-primary text-light text-capitalize">Add Rating</Button>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
                <div className="row col-12 mx-auto">
                    <MovieDetails movie={movie} />
                </div>
                <ReviewContainer id={id} />
            </div>
        </div>
    )
}
