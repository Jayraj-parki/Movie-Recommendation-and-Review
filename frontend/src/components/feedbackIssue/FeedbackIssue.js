import { Button } from '@mui/material'
import React, { useRef } from 'react'
import { useSelector } from "react-redux"

export default function FeedbackIssue() {
    const user = useSelector((state) => state.changeTheUserLog)
    const issue = useRef()
    const password = useRef()
    const submitIssue = async () => {
        try {

            const result = await fetch((`/issues/submitIssue`), {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    email: user?.email,
                    issue: issue.current.value,
                    password: password.current.value 
                })
            })
            const data = await result.json();
            if (result.status === 200) {
                alert(data )
            }
            else {
                alert(data)
            }
        }
        catch (err) {
            console.log("Error in submitting issue", err)
        }
    }
    return (

        <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Submit an Issue
                </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <div className="form-floating mb-3">
                        <input ref={issue} type="text" className="form-control" id="floatingInputR" placeholder="de" />
                        <label for="floatingInputR">Write An Issue</label>
                    </div>
                    <div className="form-floating">
                        <input ref={password} type="password" className="form-control" id="floatingPasswordD1" placeholder="Password" />
                        <label for="floatingPasswordD1">Password</label>
                    </div>
                    <Button onClick={submitIssue} className=" d-flex bg-primary text-light px-3 my-2 ms-auto">Submit</Button>
                </div>
            </div>
        </div>
    )
}
