import React,{useEffect} from 'react'
import style from "./HorizontalCard.module.scss"
import AOS from "aos";
import "aos/dist/aos.css";
export default function HorizontalCard({count,title}) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div data-aos={"fade-up"} className={style.card+ " card col-12  shadow-lg col-md-4  p-0 m-0 my-2 mx-auto rounded-3 border-0 "}>
            <div className={style.cardBody+ " card-body "}>
                <h1 className="card-title text-center">{count}</h1>
                <hr className=' p-0 my-2 text-dark'/>
                <h4 className="card-text text-center">{title}</h4>
            </div>
        </div>
    )
}
