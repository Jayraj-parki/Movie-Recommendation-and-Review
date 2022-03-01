import React from 'react'
import style from "./metaDataCard.module.scss"
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { Button, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
export default function MetaDataCard({title,link}) {
    return (
        <div className={style.metadata + " col-12 d-flex  justify-content-between"}>
            <span className='my-auto'><DoubleArrowIcon /> {title}</span>
            <NavLink to={link} className={style.watchMore + " text-decoration-none px-3 py-2"}>Watch More</NavLink>
        </div>
    )
}
