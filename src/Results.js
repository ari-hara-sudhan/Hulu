import axios from './axios'
import React, { useEffect, useState } from 'react'
import "./Results.css"
import VideoCard from './VideoCard'
import FlipMove from "react-flip-move"
function Results({select}) {
    const[movies,setMovies]=useState([])


        useEffect(()=>{
            async function fetchData() {
                const request =await axios.get(select);
                setMovies(request.data.results);
                console.log(request)
                return request


            }
            
            fetchData()
        },[select])
    return (
      
        <div >
         <div className="results" >
          <FlipMove>
          {
                
                movies.map((movie)=>(
                    <VideoCard key={movie.id} movie={movie}/>
                ))

            }

          </FlipMove>
         </div>
         
        
            
        </div>
    )
}

export default Results
