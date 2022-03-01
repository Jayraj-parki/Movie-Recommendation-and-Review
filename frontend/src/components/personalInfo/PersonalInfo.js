import React from 'react'
import style from "./PersonalInfo.module.scss"
import Library from '../library/Library';
import { useSelector } from "react-redux"
export default function PersonalInfo() {
    const user = useSelector((state) => state.changeTheUserLog)
    return (
        <>
            <div className={style.personalInfo + " col-xl-6 col-xxl-auto mx-auto"}>
                <table className="table   col-12 mx-auto  table-borderless">
                    <tbody>
                        <tr>
                            <th scope="row">Full Name</th>
                            <td>{user?.username}</td>
                        </tr>
                        <tr> 
                            <th scope="row">Email</th>
                            <td>{user?.email}</td>
                        </tr>
                        {/* <tr>
                            <th scope="row">Country</th>
                            <td colspan="2">India</td>
                        </tr>
                        <tr>
                            <th scope="row">Contact</th>
                            <td colspan="2">(+91) 9082934394</td>
                        </tr> */}
                    </tbody>
                </table>
                <Library/>
            </div>
        </>

    )
}
