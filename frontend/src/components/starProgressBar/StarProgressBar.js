import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import { Button } from '@mui/material'
export default function StarProgressBar({star,width}) {
    return (
        <>
            <div className="progress my-1 col-8 col-sm-10 col-lg-8 col-xl-10 p-0">
                <div className="progress-bar" role="progressbar" style={{ width }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <span className='col-auto col-xl-2'>{star} <StarIcon className="text-warning ms-2" /> </span>
        </>
    )
}
