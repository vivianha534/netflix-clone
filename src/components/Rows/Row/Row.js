import React, {useState, useEffect} from 'react'
import axios from "../../../axios"
import "./Row.css"
import Youtube from "react-youtube"

//from TMDB docs
const baseUrl = "https://image.tmdb.org/t/p/original/"

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([])
    const[trailerUrl, setTrailerUrl] = useState("");

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

    const opts = {
        height: "390",
        width: "100%",
        playerVars:{
            autoplay: 1,
        },
    }

    const handleClick= async (movie)=>{
        if(trailerUrl){
            setTrailerUrl("")
        }else{
            //npm module, pass it a name and it will try to find a youtube trailer for it
            let trailerurl = await axios.get(
                `/movie/${movie.id}/videos?api_key=7859a7b9338b625d28f64e8882a485fc`
            );
            setTrailerUrl(trailerurl.data.results[0]?.key)
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="rowPosters">
                {movies.map((movie)=>(
                    <div>
                        <img
                            onClick={() => handleClick(movie)}
                            key={movie.id}
                            className={`rowPoster ${isLargeRow && "rowPosterLarge"}`}
                            src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name ? movie.name : movie.original_title}
                        />
                    </div>
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}



export default Row
