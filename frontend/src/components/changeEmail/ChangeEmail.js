import { Button } from '@mui/material'
import React, { useRef } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Login as userLogin } from "../../actions/action"

export default function ChangeEmail() {
    const user = useSelector((state) => state.changeTheUserLog)
    const dispatch = useDispatch()
    const oldEmail = useRef()
    const newEmail = useRef()
    const password = useRef()
    const updateEmail = async () => {
        try {

            const result = await fetch((`/user/updateEmail/${user?._id}`), {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    oldEmail: oldEmail.current.value,
                    newEmail: newEmail.current.value,
                    password: password.current.value 
                })
            })
            const data = await result.json();
            if (result.status === 200) {
                dispatch(userLogin(data.user))
                alert(data.msg )
            }
            else {
                alert(data)
            }
        }
        catch (err) {
            console.log("Error in updating user", err)
        }
    }
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Change Email Id
                </button> 
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <div className="form-floating mb-3">
                        <input ref={oldEmail} type="email" className="form-control" id="floatingInputz" placeholder="name@example.com" />
                        <label htmlFor="floatingInputz">Old Email Address</label>

                    </div>
                    <div className="form-floating mb-3">
                        <input ref={newEmail} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">New Email address</label>
                    </div>
                    <div className="form-floating">
                        <input ref={password} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <Button onClick={updateEmail} className=" d-flex bg-primary text-light px-3 my-2 ms-auto">Submit</Button>
                </div>
            </div>
        </div>
    )
}
