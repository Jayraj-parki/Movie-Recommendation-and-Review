import { Button, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import style from "./profileData.module.scss"

import ProfileImage from '../profileImage/ProfileImage';
import PersonalInfo from '../personalInfo/PersonalInfo';
import BackBtn from '../backBtn/BackBtn';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from "react-redux"


export default function ProfileData() {
    const user = useSelector((state) => state.changeTheUserLog)
    const [genre, setGenre] = useState([])
    const [allGenre, setAllGenre] = useState([])
    const getMyGenre = async () => {
        try {
            const result = await fetch((`/myGenre/genre/${user?._id}`), {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await result.json()
            if (result.status == 200) {
                setGenre(data)
                // console.log(data)
            }
        }
        catch (err) {
            console.log("error in getMyGenre :" + err)
        }
    }
    const getAllGenre = async () => {
        try {
            const result = await fetch((`/genre/all`), {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await result.json()
            if (result.status == 200) {
                setAllGenre(data)
                // console.log(data)
            }
        }
        catch (err) {
            console.log("error in getting all Genre :" + err)
        }
    }
    const addToMyGenre = async (id) => {
        try {
            const result = await fetch((`/myGenre/addToGenre`), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userId:user?._id,
                    newGenre:id
                })
            })
            const data = await result.json()
            if (result.status == 200) {
                // setAllGenre(data)
                setGenre([...genre,id])
                // console.log(data)
            }
        }
        catch (err) {
            console.log("error in adding Genre :" + err)
        }
    }
    const removeFromMyGenre = async (id) => {
        try {
            const result = await fetch((`/myGenre/delete/one`), {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userId:user?._id,
                    oldGenre:id
                })
            })
            const data = await result.json()
            if (result.status == 200) {
                // setAllGenre(data)
                const newGenre=genre.filter((val)=>val!==id)
                setGenre(newGenre)
                // console.log(data)
            }
        }
        catch (err) {
            console.log("error in removing Genre :" + err)
        }
    }

    useEffect(() => {
        getMyGenre()
        getAllGenre()
        // console.log("genre",genre)
    }, [])
    return (
        <div className={style.profileData + " col-12 col-lg-9 sticky-top   border p-3"}>
            <div className={style.content + " row  col-12 shadow mx-auto p-3"}>
                <BackBtn />
                <div className="row col-12 mx-auto  ">
                    <ProfileImage />
                    <PersonalInfo />
                </div>
                <div className={style.tagsContainer + " row col-12 mx-auto "}>
                    <div className="alert alert-success  my-2" role="alert">
                        Please add More Genre tags to get More recommendation
                    </div>
                    <div className={style.genreTags + " row col-12 mx-auto my-2 p-2 py-3 border"}>
                        {
                            allGenre?.map((val) => {
                                return (
                                    <React.Fragment key={val._id}>
                                        {
                                            genre.includes(val?._id) ?
                                            <span  className='col-auto bg-success py-1 ps-3 m-1'>{val.genre}<IconButton onClick={()=>removeFromMyGenre(val?._id)} className="text-light"><ClearIcon /></IconButton></span>
                                            :<span  className='col-auto bg-danger py-1 ps-3 m-1'>{val.genre}<IconButton onClick={()=>addToMyGenre(val?._id)} className="text-light"><AddIcon /></IconButton></span>
                                        }
                                    </React.Fragment>
                                )
                            })
                        }

                    </div>
                   

                </div>
            </div>
        </div>
    )
}
