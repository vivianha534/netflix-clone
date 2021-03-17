import React from 'react'
import Row from "./Row/Row.js"
import requests from "../../requests"

const Rows = () => {
    return (
        <div>
            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
            <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
        </div>
    )
}

export default Rows
