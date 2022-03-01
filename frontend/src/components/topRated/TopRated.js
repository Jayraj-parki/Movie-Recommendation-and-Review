import React, { useState, useEffect } from 'react'
import style from "./topRated.module.scss"
import MetaDataCard from '../metadataCard/MetaDataCard'
import MovieCard from '../movieCard/MovieCard'
export default function TopRated() {
    const [movie,setMovie]=useState()
    const getTopRatedMovies = async () => {
        try {

            const result = await fetch(("/movie/topRatedMovies"), {
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
            console.log("Error in Top Rated movie", err)
        }
    }
    useEffect(() => {
        getTopRatedMovies()
    }, [])
    return (
        <div className={style.topRated + ' row col-12  mx-auto py-2 p-0 my-2 '}>
            <MetaDataCard title={"Top Rated Movies"} link={"/top-rated-movies"} />
            <div className={style.content + "  d-flex justify-content-center align-items-center flex-wrap   p-0 m-0  my-2 "}>
                {
                    movie?.map((val,idx)=>{
                        return (<MovieCard path={val?.movie?.poster} key={idx} id={val?.movie?._id} rate={val.rate} title={val?.movie?.title} status={true} />)
                    })
                }
            </div>

        </div>
    )
}
