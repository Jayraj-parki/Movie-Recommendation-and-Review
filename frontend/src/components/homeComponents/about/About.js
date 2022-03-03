import React,{useEffect} from 'react'
import style from "./About.module.scss"
import AOS from "aos";
import "aos/dist/aos.css";
export default function () {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div data-aos={"fade-in"}  className={style.about + ' col-lg-4 '}>
            <div className='col-6 text-light pb-2 text-start fs-5  border-bottom'>About Us</div>

            <div className={style.content + " col-12 p-2"}>
                <p>
                    MovieGram is most popular platform for reviews and ratinga movie. Here multple User can see Movie rating and theire reviews. where we also recomment many movies based on user interest and based on toply rated or latest movie. You add any movie to your Favourite list, you can add any genre o your favourite genre and this all are free. No Need to pay any single rupees for any facilty.
                </p>
            </div>
        </div>
    )
}
