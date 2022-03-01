import React from 'react'
import style from "./movieCard.module.scss"
import StarIcon from '@mui/icons-material/Star';
import { NavLink } from 'react-router-dom';
import { format } from "timeago.js"
export default function MovieCard({latest, status, path, title, time, id, rate }) {
    return (
        <>

            <NavLink to={`/movie/${id}`} className={style.card + " shadow-sm p-0 m-2"}>
                <div className={style.poster + ' col-12 mx-auto p-0 m-0'}>
                    <img src={path || "/images/6.jpg"} onError={(e) => { e.target.onerror = null; e.target.src = "/images/undefined.jpg" }} className='m-0 p-0' alt="" />
                </div>
                <div className={style.title + ' row col-12 mx-auto px-2 '}>
                    <span className="p-0 m-0">{title || "Movie Name"} </span>
                </div>
                {
                    status &&
                    <div className={style.rating + " p-2"}>
                        <span>{rate || "N/A"}<StarIcon className='text-warning' /></span>
                    </div>
                }
                {
                    latest &&
                    <div className={style.time + " text-end p-0 w-100"}>
                        <small className='text-end m-0 px-1 py-0'>{format(time)}</small>
                    </div>
                }
            </NavLink>
        </>
    )
}
