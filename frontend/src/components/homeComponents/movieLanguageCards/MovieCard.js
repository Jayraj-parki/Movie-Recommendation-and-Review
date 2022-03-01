import React,{useEffect} from 'react'

import "aos/dist/aos.css";
import Card from '../cards/Card'
export default function MovieCard() {
    
    return (
        <>
            <div className="row col-10 mx-auto gy-4  gx-5 py-5 ">
                <Card path={"/images/4.png"} title="Bollywood Movie" desc="Bollywood, an Indian Hollywood, refers to the Hindi language movie industry. "  />
                <Card path={"/images/1.png"}  title="Hollywood English Movie" desc="Hollywood, The Hollywood is home to many famous television and studios etc."  />
                <Card path={"/images/5.jpg"} title="Movies based on Genre" desc="Film genres are categories that define a movie based on its type."  />
                <Card path={"/images/1.png"} title="Movie based on Languages" desc="Movies from world wide in english, french, italian and many more."  />
                <Card path={"/images/7.jpg"} title="Top Rated Movie" desc="Top Rated Movies will be available to your feed having more than 4 star."  />
                <Card path={"/images/8.jpg"}  title="Most Reviewed Movie" desc="You can get / like / review / save the movies which are most reviewed by user."  />
                <Card path={"/images/9.jpg"} title="Most Liked Movies" desc="You can get / like / save / review the most liked movie in your feed"  />
                <Card path={"/images/10.png"} title="Recommended Movies" desc="The movies will be recommend to user based on his activity."  />
            </div>
        </>
    )
}
