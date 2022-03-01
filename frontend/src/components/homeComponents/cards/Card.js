import React, { useState, useEffect } from 'react'
import style from "./Card.module.scss"
import { NavLink } from 'react-router-dom'
import Alert from '@mui/material/Alert';
import AOS from "aos";
import "aos/dist/aos.css";
export default function Card({ title, desc, path,dir }) {
    const [active, setActive] = useState(false)
    const changeStatus = () => {
        setActive(true)
        setTimeout(() => {
            setActive(false)
        }, 3000)
    }
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <>
            <div data-aos={"fade-up"} className={style.card + "  mx-auto col-10 col-sm-6 col-md-5 col-lg-4 col-xl-3 p-1 border-0  gx-5"} >
                <div className={style.content+" card  col-12 d-flex mx-auto p-0 m-0  "}>
                    <img src={path} className="card-img-top border-0 m-0 w-100" alt="..." />
                    <div className={style.cardBody + " card-body border-0 pb-1 m-0 d-flex justify-content-center flex-column"}>
                        <div className="col-12 mb-auto ">
                            <h6 className="card-title p-0 m-0">{title}</h6>
                            <hr className=' p-0 my-2' />
                            <p className="card-text">{desc}</p>
                        </div>
                        <div onClick={() => changeStatus()} className="col-12 mt-auto">
                            <NavLink to="#" className={style.explore + ' mt-auto  d-flex justify-content-center w-100 text-decoration-none px-3 py-2'}>Explore Movies</NavLink>
                        </div>
                        {
                            active &&
                            <Alert className={style.toast + " mx-auto"} severity="warning" color="info">
                                Hello User! Please Login To Explore Movies.
                            </Alert>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
