import React,{useState,useEffect} from 'react'
import MetaDataCard from '../metadataCard/MetaDataCard'
import MovieCard from '../movieCard/MovieCard'
import style from "./genre.module.scss"
export default function Genre({id,title}) {
    const [movie,setMovie]=useState()
    const getMovieByGenre = async () => {
        try {

            const result = await fetch((`/movie/genre/intro/${id}`), {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            })
            const data = await result.json();
            if (result.status == 200) {
                // console.log(data)
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
        getMovieByGenre()
    }, [])
    return (
        <div className={style.genre + ' row col-12  mx-auto py-2 p-0 my-2 '}>
            <MetaDataCard title={title} link={`/all-movie/genre/${title}/${id}`} />
            <div className={style.content + "  d-flex justify-content-center align-items-center flex-wrap   p-0 m-0  my-2 "}>
            {
                   movie?.map((val)=>{
                       return(
                           <MovieCard key={val._id} path={val.poster} title={val.title} id={val._id} />
                       )
                   })
               }

            </div>  

        </div>
    )
}
