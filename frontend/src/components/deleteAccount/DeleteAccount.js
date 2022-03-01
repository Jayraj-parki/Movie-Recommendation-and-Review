import { Button } from '@mui/material'
import React, { useRef } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Logout as userLogout } from "../../actions/action"

export default function DeleteAccount() {
    const user = useSelector((state) => state.changeTheUserLog)
    const dispatch = useDispatch()
    const email = useRef()
    const reason = useRef()
    const password = useRef()
    const deleteAccount = async () => {
        try {

            const result = await fetch((`/user/deleteAccount/${user?._id}`), {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    email: email.current.value,
                    reason: reason.current.value,
                    password: password.current.value 
                })
            })
            const data = await result.json();
            if (result.status === 200) {
                dispatch(userLogout({}))
                alert(data)
            }
            else {
                alert(data)
            }
        }
        catch (err) {
            console.log("Error in deting user account", err)
        }
    }
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Delete My Account
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <div className="form-floating mb-3">
                        <input ref={reason} type="text" className="form-control" id="floatingInputD" placeholder="de" />
                        <label for="floatingInputD">Reason to Delete Your Account</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input ref={email} type="email" className="form-control" id="floatingInputDz" placeholder="name@example.com" />
                        <label for="floatingInputDz">Enter Email Address</label>
                    </div>
                    <div className="form-floating">
                        <input ref={password} type="password" className="form-control" id="floatingPasswordDz" placeholder="Password" />
                        <label for="floatingPasswordDz">Password</label>
                    </div>
                    <Button onClick={deleteAccount} className=" d-flex bg-primary text-light px-3 my-2 ms-auto">Submit</Button>

                </div>
            </div>
        </div>
    )
}
