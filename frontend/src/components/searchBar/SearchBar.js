import React, { useState,useEffect } from 'react'
import style from "./searchBar.module.scss"
import IconButton from '@mui/material/IconButton';
import SocialMedia from "../socialMedia/SocialMedia"
import { NavLink } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
export default function SearchBar() {
    const [movie,setMovie]=useState(null)
    const [search, setSearch] = useState("")
    const searchResult=()=>{
        const listItem=document.getElementById("list");
        if(listItem?.firstChild?.childNodes?.length<=0 || !listItem?.firstChild?.childNodes?.length){
            alert("No result found")
        }
    }
    const getAllMovie=async()=>{
        try {

            const result = await fetch((`/movie/getForSearch`), {
              method: "GET",
              headers: {
                "Content-type": "application/json"
              }
            })
            const data = await result.json();
            if (result.status == 200) {
            //   setCheck(true)
            setMovie(data)
            }
            else {
            
              console.log(data.err)
            }
          }
          catch (err) {
            console.log("Error in getting movie for search", err)
          }
    }
    useEffect(() => {
        getAllMovie()
      }, [])
    return (
        <div className={style.searchContainer + " row col-12  col-lg-10 col-xl-10 p-0  mx-lg-auto "}>
            <div className={style.content + "  p-1 p-lg-0 px-lg-1 dropdown  col-12 col-lg-6 col-xl-8 p-0 d-flex"}>
                <input value={search} autoComplete="off" onChange={(e) => setSearch(e.target.value)} type="text" className=" col-10 my-auto me-auto dropdown-toggle  m-0 p-2 px-3" id="dropdownMenuLink" data-bs-toggle={"dropdown"} aria-expanded="false" placeholder="Search movie here by movie name..." />
                <IconButton onClick={searchResult} className="col-auto py-2  my-auto ms-auto " data-bs-toggle={"dropdown"} aria-expanded="false" id="dropdownMenuLink">
                    <SearchIcon  />
                </IconButton>
                <ul id={"list"} className="dropdown-menu border-0 col-12 p-0 " aria-labelledby="dropdownMenuLink">
                    {
                        movie?.map((val, idx) =>
                            search && val?.title?.toLowerCase().includes(search?.toLowerCase().trim()) && <li key={idx}><NavLink to={`/movie/${val._id}`} className="dropdown-item text-decoration-none" href="#">{val?.title}</NavLink></li>
                        )
                    }
                </ul>

            </div>



            {/* <input className="col-12 col-lg-5 col-xl-6 m-0 p-2 px-3" type="text" placeholder="Search movie here by movie name..." /> */}
            {/* <Button className="px-4 col-12 my-2 my-lg-0 col-lg-auto mx-lg-3 fs-6">Search</Button> */}
            <SocialMedia />
        </div>
    )
}
