import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import style from "./logout.module.scss"
import Button from '@mui/material/Button'
import { Logout as userLogout } from "../../actions/action"
import { useDispatch } from "react-redux"
export default function Logout() {
    const dispatch = useDispatch()
    const Logout=async()=>{
        try {
            const result = await fetch(("/user/logout"), {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                
            })
            const data = await result.json();
            if (result.status === 201) {
                alert(data)
                dispatch(userLogout({}))
            } 
            else {
                alert(data)
            }
        }
        catch (err) {
            console.log("Error in Logout",err)
        } 
    }
    return (
        <Button onClick={()=>Logout()} className={style.logout + " row col-12 mx-auto px-2 py-2"}>
            <div className={style.content + " col-12 d-flex justify-content-start align-items-center  p-1"}>
                <LogoutIcon className="fs-3" />
                <span className=" col-auto my-auto fs-5 ms-2">Logout</span>
            </div> 
        </Button>
    )
}
