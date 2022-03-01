import React, { useState, useEffect } from 'react'
import HorizontalCard from '../horizontalCard/HorizontalCard'
export default function DataCountingCard() {
  const [movieCount, setMovieCount] = useState(0)
  const [genreCount, setGenreCount] = useState(0)
  const [userCount, setUserCount] = useState(0)
  const getMovieCount = async () => {
    try {
      const result = await fetch(("/movie/allMovieCount"), {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await result.json()
      if (result.status === 200) {
        setMovieCount(data)
      }
      else {
        setMovieCount(0)
      }
    }
    catch (err) {
      console.log("error in getMovieCount :" + err)
    }
  }
  const getGenreCount = async () => {
    try {
      const result = await fetch(("/genre/allGenreCount"), {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await result.json()
      if (result.status === 200) {
        setGenreCount(data)
      }
      else {
        setGenreCount(0)
      }
    }
    catch (err) {
      console.log("error in getMovieCount :" + err)
    }
  }
  const getUserCount = async () => {
    try {
      const result = await fetch(("/user/count"), {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await result.json()
      if (result.status === 200) {
        setUserCount(data)
      }
      else {
        setUserCount(0)
      }
    }
    catch (err) {
      console.log("error in getMovieCount :" + err)
    }
  }
  useEffect(() => {
    getMovieCount()
    getGenreCount()
    getUserCount()
  }, [])
  return (
    <div className="row col-10 mx-auto g-2 my-4 ">
      <HorizontalCard count={movieCount} title={"Movies"} />
      <HorizontalCard count={genreCount} title={"Genre"} />
      <HorizontalCard count={userCount} title={"Users"} />
    </div>
  )
} 
