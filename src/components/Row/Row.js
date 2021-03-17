import React, {useState, useEffect} from 'react'
import axios from '../../axios'
import "./Row.css"

//from TMDB docs
const baseUrl = "https://image.tmdb.org/t/p/original/"

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([])

    //when row loads want to make a request to TMDB
    useEffect(()=>{
        //need to make asynch b/c we're making a request to third party (TMDB)
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            // console.log(request)
            setMovies(request.data.results);
            return request
        }
        fetchData()
        //whenever you use any variable that's pulled from outside useEffect, you need to put it in []
        //this will load first time, and whenever fetchUrl changes
    }, [fetchUrl])

    // console.table(movies)

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="rowPosters">
                {movies.map((movie)=>(
                    <div>
                        <img
                            key={movie.id}
                            className={`rowPoster ${isLargeRow && "rowPosterLarge"}`}
                            src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name ? movie.name : movie.original_title}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}



export default Row
