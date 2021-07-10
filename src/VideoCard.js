import React,{forwardRef} from 'react'
import "./Videocard.css"
import TextTruncate from "react-text-truncate"
import ThumbSharp from "@material-ui/icons/ThumbUpAltOutlined"
const base_url="https://image.tmdb.org/t/p/original/"

const VideoCard=forwardRef(({movie},ref)=> {
    return (
        <div ref={ref} className="videocard">
            <img src={`${base_url}${movie.backdrop_path ||movie.poster_path}`} alt="image"/>
            
            <TextTruncate
            line={1}
            element="p"
            truncateText="_"
            text={movie.overview}
            />
            <h2>{movie.title||movie.original_name}</h2>

            <p className="videocard__status">
                <ThumbSharp/>
            {movie.media_type && `${movie.media_type}`}
            {movie.release_date || movie.first_air_date}
            {movie.vote_count}</p>

        
         
        </div>
    )
})

export default VideoCard
