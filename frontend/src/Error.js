import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import style from "./error.module.scss"
import { useNavigate } from 'react-router-dom'
import HashLoader from "react-spinners/HashLoader";
export default function Error() {
  let [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  const changeLoad=()=>{
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }
  useEffect(() => {
    changeLoad()
    return () => {
      setLoading(); // This worked for me
    };
  }, [])

  return (
    <>
      <div className={style.error + " d-flex justify-content-center align-items-center container-fluid "}>
        {
          loading &&
          <div className={style.loader + " d-flex justify-content-center align-items-center bg-light"}>
            <HashLoader color={"#0984e3"} loading={loading} size={50} />
          </div>
        }

        <div className={style.container + "  "}>
          <div className={style.Image + "  mx-auto"}>
            <img src={"/images/error.png"} className="mx-auto" alt="" />
          </div>
          <div className={style.contant_box_404 + " py-2"}>
            <h3 className={"fs-2 text-center 1"}>
              Look like you're lost
            </h3>
            <p className='text-center'>the page you are looking for not avaible!</p>
            <Button onClick={() => navigate("/")} className=" d-flex bg-primary px-3 text-white mx-auto">Go to Home</Button>
          </div>
        </div>

      </div>
      {/* <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input value={"#ee00ee"}  placeholder="Color of the loader" />

      <HashLoader color={"#0984e3"} loading={loading}  size={50} />
    </div> */}
    </>
  )
}
