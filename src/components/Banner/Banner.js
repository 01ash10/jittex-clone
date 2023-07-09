import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'
function Banner() {
  const [movie, setmovie] = useState()
  useEffect(() => {
      axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data.results[2])
        setmovie(response.data.results[2])
      })
  }, [])
  return (
    
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
    className='Banner'>
        <div className='Content'>
           <h1 className='title'>{movie ? movie.title : ""}</h1>
              <div className='BannerButtons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
              </div>
            <h1 className='Description'>{movie ? movie.overview : ""} </h1>
        </div>
        <div className="fadebottom"></div>
    </div>
  )
}

export default Banner
