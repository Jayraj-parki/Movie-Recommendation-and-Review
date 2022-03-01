import React,{useEffect} from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import style from "./backBtn.module.scss"

import {useNavigate} from "react-router-dom";
export default function BackBtn() {
    const navigate = useNavigate();
    
    return (
        <div  className={style.goBack + " row   col-12 mx-auto p-0 "}>
            <span onClick={()=>navigate(-1)}  className='my-auto col-auto me-auto '><ArrowBackIcon /> Back</span>
        </div >
    )
}
