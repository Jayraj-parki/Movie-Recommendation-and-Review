import React ,{useEffect} from 'react'
import Susbscription from '../Subscription/Susbscription'
import style from "./HomeScreen.module.scss"
import Navbar from '../navbar/Navbar'
import AOS from "aos";
import "aos/dist/aos.css";
export default function HomeScreen() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className={style.homeScreen + ' row-col-12 mx-auto my-0 p-0 '}>
            <div id="carouselExampleIndicators" className={style.carauselSlide + " carousel slide"} data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className={style.carauselInner + " carousel-inner"}>
                    <div className="carousel-item active">
                        <img src="/images/1.png" alt="..." />
                    </div>
                   
                    <div className="carousel-item">
                        <img src="/images/3.png" alt="..." />
                    </div>
                </div>

            </div>
            <div className={style.greeting + " row col-12 mx-auto p-0"}>
                <div className={style.navbar + "  row col-12  mx-auto  p-0"}>
                    <div  data-aos={"fade-up"}  className="col-12 ">
                        <Navbar />
                    </div>
                </div>
                <div className={style.content+ " row col-12 d-flex justify-content-center align-items-center mx-auto"} >
                    <div  data-aos={"fade-up"}  className="col-12 col-lg-6 my-lg-auto  ">
                        <span className={style.title}>Search Our Mostly Rated And Reviewed Movies</span>
                        <br></br>
                        <span className='fs-5 d-none d-md-flex justify-content-center'>~The world is a stage, the stage is a world of entertainment.</span>
                    </div>
                    <div  data-aos={"fade-up"}  className="col-12 col-lg-6 p-0 m-lg-auto">
                        <Susbscription />
                    </div>
                </div>
            </div>

        </div>
    )
}
