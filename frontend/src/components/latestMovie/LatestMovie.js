import React,{useState,useEffect} from 'react'
import style from "./latestMovie.module.scss"
import MetaDataCard from '../metadataCard/MetaDataCard'
import MovieCard from '../movieCard/MovieCard'
export default function LatestMovie() {
    const [movie,setMovie]=useState()
    const getLatestMovies = async () => {
        try { 

            const result = await fetch(("/movie/latest/intro"), {
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
    useEffect(() => {
        getLatestMovies()
    }, [])
    return ( 
        <div className={style.latest + ' row col-12  mx-auto py-2 p-0 my-2 '}>
            <MetaDataCard title={"Latest Movies"} link="/latest-movies" />
            <div className={style.content + "  d-flex justify-content-center align-items-center flex-wrap   p-0 m-0  my-2 "}>
               {
                   movie?.map((val)=>{
                       return(
                           <MovieCard  latest={true} key={val._id} time={val?.createdAt} path={val?.poster} title={val.title} id={val._id} />
                       )
                   })
               }
            </div>
        </div> 
    )
}
 