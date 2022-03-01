import React,{useRef,useEffect} from 'react'
import style from "./Contact.module.scss"
import AOS from "aos";
import "aos/dist/aos.css";
export default function Contact() {
    const email=useRef()
    const msg=useRef()
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const submitMessage = async () => {
        try {

            const result = await fetch((`/issues/submitMessage`), {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    email: email?.current.value,
                    issue: msg?.current.value,
                    
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
        <>
           
            <div  data-aos={"fade-right"} className={style.contact + ' col-lg-4 '}>
                <div className='col-6  text-light pb-2 text-start fs-5  border-bottom'>Contact Us</div>

                <div className={style.content + " col-lg-12 py-2 "}>
                    <div className="mb-3">
                        <input ref={email} type="email" className="form-control" id="exampleFormControlInput1x" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <textarea  ref={msg} className="form-control" id="exampleFormControlinput1xz" placeholder="Write a message here..." ></textarea>
                    </div>
                    <button onClick={submitMessage} type='button' className={style.btn + " d-flex p-2 justify-content-center col-4 ms-auto"}>contact</button>

                </div>
            </div>

        </>
    )
}
