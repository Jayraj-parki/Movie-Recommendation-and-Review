import React,{useEffect} from 'react'
import style from "./Footer.module.scss"
import About from '../about/About'
import OurGenre from '../ourGenre/OurGenre'
import Contact from '../contact/Contact'
import IconButton from '@mui/material/IconButton';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import AOS from "aos";
import "aos/dist/aos.css";
export default function Footer() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <> 
            <div data-aos={"fade-up"} id="footer" className={style.footer + " row col-12 mx-auto mt-3 pt-2"}>
                <div className={style.content+ "  col-12 mx-auto p-1 d-flex justify-content-center align-items-center flex-row "}>
                    <IconButton className=" d-flex bg-light text-dark m-1"><FacebookOutlinedIcon/></IconButton>
                    <IconButton className=" d-flex bg-light text-dark m-1"><YouTubeIcon/></IconButton>
                    <IconButton className=" d-flex bg-light text-dark m-1"><InstagramIcon/></IconButton>
                    <IconButton className=" d-flex bg-light text-dark m-1"><GitHubIcon/></IconButton>
                    <IconButton className=" d-flex bg-light text-dark m-1"><TwitterIcon/></IconButton>
                </div>  
                <hr/>
                <div className={style.content+ " row col-12 mx-auto px-4 m-0"}>
                    <About/>
                    <OurGenre/>
                    <Contact/> 
                </div>
                <div className={style.copyright + " py-2 row col-12 mx-auto"}>
                    <span className='fs-6 d-flex justify-content-center text-center'>Copyright &copy; 2022 MovieGram All Rights Reserved.</span>
                </div>
            </div>
        </>
    )
}
