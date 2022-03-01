import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import style from "./reviewesMoviedCollection.module.scss"
import BackBtn from '../backBtn/BackBtn';
import { NavLink } from 'react-router-dom';
import HashLoader from "react-spinners/HashLoader";
import { useSelector } from "react-redux"
export default function ReviewesMoviedCollection() {
    let [loading, setLoading] = useState(true);
    const user = useSelector((state) => state.changeTheUserLog)
    const [review, setReview] = useState(null)
    const getReviewedMovies = async () => {
        try {

            const result = await fetch((`/review//specific/movieName/byUser/${user?._id}`), {
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
                console.log(data.err)
            }
        }
        catch (err) {
            console.log("Error in latest movie", err)
        }
    }
    useEffect(() => {
        getReviewedMovies()
    }, [])
    useEffect(() => {
        if (review) {
            setLoading(false)
        }
    }, [review])
    return (
        <div className={style.reviewed + " col-12 col-lg-9 sticky-top   border p-3"}>
            {
                loading &&
                <div className={style.loader + " d-flex justify-content-center align-items-center bg-white"}>
                    <HashLoader color={"#0984e3"} loading={loading} size={50} />
                </div>
            }
            <div className={style.content + " row  col-12 shadow mx-auto p-3"}>
                <BackBtn />
                <div className="row col-12 mx-auto  p-3">
                    {
                        review?.length <= 0 ?
                            <div className="alert alert-danger  my-2 col-10 text-center mx-auto" role="alert">
                                You Have Not Reviewed Any Movie Yet!
                            </div>
                            :
                            <>

                                <table className="table table-bordered ">
                                    <thead>
                                        <tr>
                                            <th scope="col">Movies</th>
                                            <th scope="col">Reviews</th>
                                            <th scope="col">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            review?.map((val) => {
                                                return (
                                                    <tr key={val._id}>
                                                        <td><NavLink to={`/movie/${val?.movie?._id}`}>{val?.movie?.title}</NavLink></td>
                                                        <td>{val.review}</td>
                                                        <td>{val?.createdAt?.split("T")[0]}</td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </table>
                            </>
                    }
                </div>
            </div>
        </div>
    )
}
