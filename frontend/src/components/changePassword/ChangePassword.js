import { Button } from '@mui/material'
import React,{useState,useRef} from 'react'
import { useSelector } from "react-redux"
export default function ChangePassword() {
    const user = useSelector((state) => state.changeTheUserLog)
    const [oldPass, setOldPass] = useState(false)
    const [newPass, setNewPass] = useState(false)
    const [confirmPass, setConfirmPass] = useState(false)

    const pass=useRef()
    const newPassword=useRef()
    const confirmPassword=useRef()
    const updatePassword = async () => {
        try {

            const result = await fetch((`/user/updatePassword/${user?._id}`), {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    password: pass.current.value,
                    newPassword: newPassword.current.value,
                })
            })
            const data = await result.json();
            if (result.status === 200) {
                alert(data)
            } 
            else { 
                alert(data)
            }
        }
        catch (err) {
            console.log("Error in updating pass of user", err)
        }
    }
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Change Password
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <div className="form-floating mb-1 ">
                        <input ref={pass} type={!oldPass && "password"} className="form-control" id="floatingPasswordOld" placeholder="Password" />
                        <label for="floatingPasswordOld">Old Password</label>
                    </div>
                    <div className="form-check mb-3 ">
                        <input  className="form-check-input" type="checkbox" checked={oldPass} onChange={(e) => setOldPass(e.target.checked)} id="flexCheckDefaultOld" />
                        <label className="form-check-label" for="flexCheckDefaultOld">
                            Show Password
                        </label>
                    </div>
                    <div className="form-floating mb-1">
                        <input ref={newPassword}  type={!newPass && "password"} className="form-control" id="floatingPasswordNew" placeholder="Password" />
                        <label for="floatingPasswordNew">New Password</label>
                    </div>
                    <div className="form-check mb-3 ">
                        <input className="form-check-input" type="checkbox" checked={newPass} onChange={(e) => setNewPass(e.target.checked)} id="flexCheckDefaultNew" />
                        <label className="form-check-label" for="flexCheckDefaultNew">
                            Show Password
                        </label>
                    </div>
                    <div className="form-floating">
                        <input ref={confirmPassword} type={!confirmPass && "password"} className="form-control" id="floatingPasswordConfirm" placeholder="Password" />
                        <label for="floatingPasswordConfirm">Confirm Password</label>
                    </div>
                    <div className="form-check mb-1 ">
                        <input className="form-check-input" type="checkbox" checked={confirmPass} onChange={(e) => setConfirmPass(e.target.checked)} id="flexCheckDefaultConfirm" />
                        <label className="form-check-label" for="flexCheckDefaultConfirm">
                            Show Password
                        </label>
                    </div>
                    <Button onClick={updatePassword} className=" d-flex bg-primary text-light px-3 my-2 ms-auto">Submit</Button>
                </div>
            </div>
        </div>
    )
}
