import React, { useRef, useEffect } from 'react'
import style from "./Register.module.scss"
import AOS from "aos";
import "aos/dist/aos.css";
export default function Register() {
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const confirmPassword = useRef()

    const Register = async () => {
        if (password.current.value != confirmPassword.current.value) {
            return alert("Confirm Password Not Matching With Password ")
        }
        else {
            try {

                const result = await fetch(("/user/register"), {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                        username: username.current.value,
                        email: email.current.value,
                        password: password.current.value
                    })
                })
                const data = await result.json();
                if (result.status === 201) {
                    alert(data.msg)
                }
                else {
                    alert(data.err)
                }
            }
            catch (err) {
                console.log("Error in Registeration", err)
            }
        }
    }
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div data-aos={"fade-up"}>
            <div  className='col-8 mx-auto text-light pb-2 text-center fs-5  border-bottom'>Register Here</div>

            <div className={style.register + " col-12 p-lg-5 py-lg-4 "}>
                <div className="mb-lg-2 text-start">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input ref={email} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-lg-2 text-start">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input ref={username} type="text" className="form-control" id="username" placeholder="Alen Bob" />
                </div>
                <div className="mb-lg-2 text-start">
                    <label htmlFor="password1" className="form-label">Password</label>
                    <input ref={password} type={"password"} className="form-control" id="password1" placeholder="Password@123" ></input>
                </div>
                <div className="mb-lg-2 text-start">
                    <label htmlFor="password2" className="form-label">Confirm Password</label>
                    <input ref={confirmPassword} type={"password"} className="form-control" id="password2" placeholder="Password@123" ></input>
                </div>
                <button onClick={Register} type='button' className={style.btn + " d-flex p-2 my-2 justify-content-center col-5 ms-auto"}>Register</button>
            </div>
        </div>
    )
}
