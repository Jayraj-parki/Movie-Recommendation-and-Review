import React, { useState } from 'react'
import style from "./Subscription.module.scss"
import Login from '../login/Login'
import Register from '../register/Register'
export default function () {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <div id="login" className={style.subscription + " row col-sm-10 col-md-8 col-lg-10 col-xl-10 my-auto p-0 mx-auto d-flex justify-content-center align-items-center flex-row "}>
                <div className={style.toggler + ' row col-12 me-auto'}>
                    <button onClick={() => setToggle(false)} id={toggle ? "" : `${style.toggle}`} className='col-auto py-2 px-3 '>Login</button>
                    <button onClick={() => setToggle(true)} id={!toggle ? "" : `${style.toggle}`} className='col-auto py-2 px-3'>Register</button>
                </div>
                <div className={style.subsType + " row col-12"}>
                    {toggle ?
                        <Register />
                        :
                        <Login />
                    }
                </div>
            </div>
        </>
    )
}
