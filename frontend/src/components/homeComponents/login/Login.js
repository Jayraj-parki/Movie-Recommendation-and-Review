import React ,{useRef,useEffect} from 'react'
import style from "./Login.module.scss"
import {  useDispatch } from "react-redux"
import { Login as userLogin } from "../../../actions/action"
import AOS from "aos";
import "aos/dist/aos.css";
export default function Login() {
    const dispatch = useDispatch()
    const email=useRef();
    const password=useRef();
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const Login = async () => {
        try {
           
            const result = await fetch(("/user/login"), {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    email:email.current.value,
                    password:password.current.value
                })
            })
            const data = await result.json();
            if (result.status !== 201) {
                alert(data.err)
            } 
            else {
                dispatch(userLogin(data.user))
                alert(data.msg ? data.msg : "Login Successfull")
            }
        }
        catch (err) {
            console.log("Error in Login",err)
        } 
    }
    return (
        <div data-aos={"fade-up"}>
            <div id="login" className='col-8 mx-auto text-light pb-2 text-center fs-5  border-bottom'>Login Here</div>

            <div  className={style.login + " col-12  p-5 py-4"}>
                <div className="mb-3 text-start">
                    <label htmlFor="exampleFormControlInput1" className="form-label me-auto  ">Email address</label>
                    <input ref={email} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3 text-start">
                    <label htmlFor="exampleFormControlinput2" className="form-label">Password</label>
                    <input ref={password} type={"password"} className="form-control" id="exampleFormControlinput2" placeholder="Password@123" ></input>
                </div>
                <button onClick={()=>Login()} type='button' className={style.btn + " d-flex p-2 justify-content-center col-4 ms-auto"}>Login</button>
            </div>
        </div>
    )
}
