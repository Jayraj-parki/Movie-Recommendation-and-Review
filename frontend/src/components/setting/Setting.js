import React, { useState } from 'react'
import { Button } from '@mui/material'
import style from "./setting.module.scss"
import BackBtn from '../backBtn/BackBtn';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ChangeEmail from '../changeEmail/ChangeEmail';
import ChangePassword from '../changePassword/ChangePassword';
// import DeleteAccount from '../deleteAccount/DeleteAccount';
import FeedbackIssue from '../feedbackIssue/FeedbackIssue';
import DeleteAccount from '../deleteAccount/DeleteAccount';


export default function Setting() {

    return (
        <div className={style.setting + " col-12 col-lg-9 sticky-top   border p-3"}>
            <div className={style.content + " row  col-12 shadow mx-auto p-3"}>
                <BackBtn />
                <div className="row col-12 mx-auto  p-3">
                    <div className="accordion" id="accordionExample">
                        <ChangeEmail />
                        <ChangePassword />
                        <DeleteAccount />
                        <FeedbackIssue />
                    </div>
                </div>
            </div>
        </div>
    )
}
