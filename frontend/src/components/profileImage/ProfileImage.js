import { Button } from '@mui/material'
import React, { useState } from 'react'
import style from "./profileImage.module.scss"
import { storage } from '../../firebase/index'
// import { StarIcon,Cancel } from "@mui/icons-material"
import StarIcon from '@mui/icons-material/Star';
import CancelIcon from '@mui/icons-material/Cancel';
import { useSelector } from "react-redux"
export default function ProfileImage() {
    const user = useSelector((state) => state.changeTheUserLog)
    const [change, setChange] = useState(false)
    const [file, setFile] = useState(null)
    const submitHandler = async () => {

        const newProfileImage = {
            userId: user._id,
        }
        if (file) {
            setChange(false)
            const path = "" + file.name + Date.now()
            const uploadTask = storage.ref("/images/" + path).put(file)
            uploadTask.on(
                "state_changed", 
                snapshot => {
                },
                error => {
                    console.log(error);
                },
                () => {
                    storage.ref("images")
                        .child(path)
                        .getDownloadURL()
                        .then(async (url) => {
                            newProfileImage.profile = url
                            try {
                                const result = await fetch((`/user/changeProfileImage/`), {
                                    method: "PATCH",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        profileImage: newProfileImage
                                    })
                                })
                                const data = await result.json();
                                if (result.status === 200) {
                                    alert("Profile Image Changed Successfully.")
                                }
                                else{
                                    alert("Opps! something went wrong.")
                                }
                                setFile(null)
                            }
                            catch (err) {
                                console.log("err in saving new profile image"+err)
                            }
                        })
                }
            )
        } 

        else {
            window.alert("PLease upload image before uploading ")
        }
    }
    return (
        <div className={style.profileImg + " col-12 col-lg-6 col-xxl-3  p-2 mx-auto"}>
            <div className={style.wrapper + " row col-12 mx-auto p-0 "}>
                <div className={style.profileImage + " col-12 mx-auto p-0 m-0"}>
                    {
                        file ?
                            <img src={URL.createObjectURL(file)} className=" mx-auto" alt="" />
                            :
                            <img src={user.profile || "/images/1.png"} className=" mx-auto" alt="" />
                    }
                </div>

                {/* {
                    file && (
                        
                        <div className={style.shareImageContainer}>
                            <img className={style.selectedImg} src={URL.createObjectURL(file)} alt="not found" />
                        </div>

                        )
                } */}

                {/* <label htmlFor="file" className={style.shareOption}>
                    <StarIcon htmlColor="tomato" className={style.shareIcon} />
                    <span className={style.shareOptionText}>Photo or Video</span>
                </label> */}
                {
                    change ?
                        <div className='col-12 d-flex  mx-auto my-2  '>
                            <input type="file" id={"file"} onChange={(e) => setFile(e.target.files[0])} hidden />
                            <Button className=" col-auto p-0  mx-auto bg-secondary text-light">
                                <label htmlFor="file" className='py-2 px-3'>
                                    Upload
                                </label>
                            </Button>
                            <Button onClick={submitHandler} className="col-auto px-3 mx-auto bg-primary text-light">Submit</Button>
                            <Button onClick={() => {setChange(false);setFile(null)}} className="col-auto px-3 mx-auto bg-danger text-light">Cancel</Button>
                        </div>
                        :
                        <Button onClick={() => setChange(true)} className="col-12 mx-auto my-2 ">Change Photo</Button>
                }
            </div>
        </div>
    )
}
