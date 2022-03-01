import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/home/Home'
import User from './pages/user/User'
import Profile from './pages/profile/Profile'
import MyFavouriteMovies from './pages/myFavMovies/MyFavouriteMovies'
import MovieReviewdByMe from './pages/movieReviewdByMe/MovieReviewdByMe'
import TopRatedMovie from './pages/topRatedMovies/TopRatedMovie'
import MyRatedMovies from './pages/myRatedMovies/MyRatedMovies'
import MostReviewed from './pages/mostReviewed/MostReviewed'
import LatestMovies from './pages/latestMovie/LatestMovies'
import MostLiked from './pages/mostLiked/MostLiked'
import MoviesByGenre from './pages/moviesByGenre/MoviesByGenre'
import EnglishMovies from './pages/englishMovies/EnglishMovies'
import HindiMovies from './pages/hindiMovies/HindiMovies'
import OtherMovies from './pages/otherMovies/OtherMovies'
import MyRecommendedMovies from './pages/myRecommendedMovies/MyRecommendedMovies'
import SettingPage from './pages/settings/SettingPage'
import Movie from './pages/movie/Movie'
import AllMovieByGenre from './pages/allMovieByGenre/AllMovieByGenre'

import { useSelector, useDispatch } from "react-redux"
import { Login } from "./actions/action"
import Error from './Error'

export default function App() {
  const user = useSelector((state) => state.changeTheUserLog)
  const dispatch = useDispatch()
  const getData = async () => {
    try {
      const result = await fetch(("/user/userData"), {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await result.json()
      if (data.user) {
        dispatch(Login(data.user))
      }
    }
    catch (err) {
      console.log("error in getData :" + err)
    }
  }
  useEffect(() => {
    getData()
  }, [user])
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={user?._id ? <Navigate to="/user" /> : <Home />} />
        <Route path="/user" exact element={!user?._id ? <Error/> : <User />} />
        <Route path="/my-reviewed-movies" exact element={!user?._id ? <Error/> : <MovieReviewdByMe />} />
        <Route path="/profile" exact element={!user?._id ? <Error/> : <Profile />} />
        <Route path="/favourite-movies" exact element={!user?._id ? <Error/> :<MyFavouriteMovies />} />
        <Route path="/top-rated-movies" exact element={!user?._id ? <Error/> :<TopRatedMovie />} />
        <Route path="/my-rated-movies" exact element={!user?._id ? <Error/> :<MyRatedMovies />} />
        <Route path="/most-reviewed-movies" exact element={!user?._id ? <Error/> :<MostReviewed />} />
        <Route path="/latest-movies" exact element={!user?._id ? <Error/> :<LatestMovies />} />
        <Route path="/most-liked-movies" exact element={!user?._id ? <Error/> :<MostLiked />} />
        <Route path="/movies-by-genre" exact element={!user?._id ? <Error/> :<MoviesByGenre />} />
        <Route path="/english-movies" exact element={!user?._id ? <Error/> :<EnglishMovies />} />
        <Route path="/hindi-movies" exact element={!user?._id ? <Error/> :<HindiMovies />} />
        <Route path="/other-movies" exact element={!user?._id ? <Error/> :<OtherMovies />} />
        <Route path="/recommended-movies" exact element={!user?._id ? <Error/> :<MyRecommendedMovies />} />
        <Route path="/setting" exact element={!user?._id ? <Error/> : <SettingPage />} />
        <Route path="/all-movie/genre/:genre/:id" exact element={!user?._id ? <Error/> : <AllMovieByGenre />} />
        <Route path="/movie/:id" exact element={!user?._id ? <Error/> : <Movie />} />
        <Route path="/*" exact element={<Error/>} />
      </Routes>







      {/* <Routes>
        <Route path="/" exact element={user?._id ? <Navigate to="/user" /> : <Home />} />
        <Route path="/user" exact element={!user?._id ? <Navigate to="/" /> : <User />} />
        <Route path="/my-reviewed-movies" exact element={!user?._id ? <Navigate to="/" /> : <MovieReviewdByMe />} />
        <Route path="/profile" exact element={!user?._id ? <Navigate to="/" /> : <Profile />} />
        <Route path="/favourite-movies" exact element={!user?._id ? <Navigate to="/" /> :<MyFavouriteMovies />} />
        <Route path="/top-rated-movies" exact element={!user?._id ? <Navigate to="/" /> :<TopRatedMovie />} />
        <Route path="/my-rated-movies" exact element={!user?._id ? <Navigate to="/" /> :<MyRatedMovies />} />
        <Route path="/most-reviewed-movies" exact element={!user?._id ? <Navigate to="/" /> :<MostReviewed />} />
        <Route path="/latest-movies" exact element={!user?._id ? <Navigate to="/" /> :<LatestMovies />} />
        <Route path="/most-liked-movies" exact element={!user?._id ? <Navigate to="/" /> :<MostLiked />} />
        <Route path="/movies-by-genre" exact element={!user?._id ? <Navigate to="/" /> :<MoviesByGenre />} />
        <Route path="/english-movies" exact element={!user?._id ? <Navigate to="/" /> :<EnglishMovies />} />
        <Route path="/hindi-movies" exact element={!user?._id ? <Navigate to="/" /> :<HindiMovies />} />
        <Route path="/other-movies" exact element={!user?._id ? <Navigate to="/" /> :<OtherMovies />} />
        <Route path="/recommended-movies" exact element={!user?._id ? <Navigate to="/" /> :<MyRecommendedMovies />} />
        <Route path="/setting" exact element={!user?._id ? <Navigate to="/" /> : <SettingPage />} />
        <Route path="/all-movie/genre/:genre/:id" exact element={!user?._id ? <Navigate to="/" /> : <AllMovieByGenre />} />
        <Route path="/movie/:id" exact element={!user?._id ? <Navigate to="/" /> : <Movie />} />
      </Routes> */}
    </Router>
  )
}

