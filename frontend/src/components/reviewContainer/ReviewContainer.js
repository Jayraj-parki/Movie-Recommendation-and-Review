import { Button } from '@mui/material'
import React, { useState, useEffect, useRef } from 'react'
import ReviewMsg from '../reviewMsg/ReviewMsg'
import style from "./reviewContainer.module.scss"
import { useSelector, useDispatch } from "react-redux"


export default function ReviewContainer({ id }) {
    const user = useSelector((state) => state.changeTheUserLog)
    const review = useRef()
    const [reviews, setReviews] = useState(null)

    const getReviews = async () => {
        try {
            const result = await fetch((`/review/specific/byMovie/${id}`), {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            })
            const data = await result.json();
            if (result.status == 200) {
                setReviews(data)
                document.getElementById("wrapperId")?.scrollTo(0,document.getElementById("wrapperId")?.scrollHeight)
            }
            else {
                console.log(data)
            }
        }
        catch (err) {
            console.log("Error in getting rveiew of movie", err)
        }
    }
    const addReview = async () => {
        try {

            const result = await fetch((`/review/add/`), {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    userId: user?._id,
                    movieId: id,
                    review: review.current.value,
                    username: user?.username
                })
            })
            const data = await result.json();
            if (result.status == 200) {
                review.current.value = ""
                getReviews()
                
            }
            else {
                console.log(data.err)
            }
        }
        catch (err) {
            console.log("Error in adding review for movie", err)
        }
    }
    useEffect(() => {
        getReviews()
    }, [])
    return (
        <>
            <div id="reviewOfMovie" className={style.reviewContainer + " row col-12 mx-auto p-3 border rounded-3"}>
                <div class="alert alert-primary" role="alert">
                    Add your review for this movie
                </div>
                <div id={"wrapperId"} className={style.wrapper + " col-12  p-2 px-4 rounded"}>
                    {
                        reviews?.length > 0 ?
                            <>{
                                reviews?.map((val) =>
                                    <ReviewMsg text={val?.review} user={val?.username} />
                                )
                            }
                            </>
                            :
                            <p>
                                No review Available
                            </p>
                    }
                </div>
                <div className="col-12  p-0">
                    <div className="input-group  my-3">
                        <input ref={review} type="text" className="form-control shadow-none" placeholder="Write your review here" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <Button onClick={addReview} className=" text-light bg-primary" type="button" id="button-addon2">Submit</Button>
                    </div>
                </div>
            </div>

        </>
    )
}
