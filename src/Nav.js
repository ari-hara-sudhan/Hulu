import React from 'react'
import "./Nav.css"
import requests from './requests'
function Nav({setSelect}) {
    return (
        <div className="nav">
            <h2 onClick={()=>setSelect(requests.fetchTrending)}>Trending</h2>
            <h2 onClick={()=>setSelect(requests.fetchAnimation)} >Top Rated</h2>
            <h2 onClick={()=>setSelect(requests.fetchActionMovies)}>Action</h2>
            <h2 onClick={()=>setSelect(requests.fetchComedyMovies)} >Comedy</h2>
            <h2 onClick={()=>setSelect(requests.fetchHorrorMovies)} >Horror</h2>
            <h2 onClick={()=>setSelect(requests.fetchRomanceMovies)} >Romance</h2>
            <h2 onClick={()=>setSelect(requests.fetchMystery)} >Mysteries</h2>
            <h2 onClick={()=>setSelect(requests.fetchScFi)} >Sci-fi</h2>
            <h2 onClick={()=>setSelect(requests.fetchWestern)}>Western</h2>
            <h2 onClick={()=>setSelect(requests.fetchAnimation)} >Animation</h2>
            <h2 onClick={()=>setSelect(requests.fetchTV)} >Movie</h2>
        </div>
    )
}

export default Nav
