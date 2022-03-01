import React, { useEffect, useState } from 'react'

export default function MovieDetails({ movie }) {
    const [genre, setGenre] = useState()
    const getGenreNames = async () => {
        try {

            const result = await fetch((`/genre/genreNames/`), {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    genres: movie?.genre
                })
            })
            const data = await result.json();
            if (result.status == 200) {
                setGenre(data)
            }
            else {
                console.log(data.err)
            }
        }
        catch (err) {
            console.log("Error in getting Genre name of movie", err)
        }
    }
    useEffect(() => {
        getGenreNames()
    }, [movie])
    return (
        <>
            <table className="table table-bordered col-12">
                <tbody>
                    <tr>
                        <th >Title</th>
                        <td >{movie?.title}</td>
                    </tr>
                    <tr>
                        <th>Overview</th>
                        <td>{movie?.overview}</td>
                    </tr>
                    <tr>
                        <th>language</th>
                        <td>{movie?.language}</td>

                    </tr>
                    <tr>
                        <th>release Date</th>
                        <td>{movie?.release_date}</td>

                    </tr>
                    <tr>
                        <th>Genre</th>
                        <td>
                            {
                                genre?.map((val)=>val?.genre + " | ")
                            }
                        </td>

                    </tr>

                </tbody>
            </table>
        </>
    )
}
