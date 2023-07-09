import React, { useEffect, useState } from 'react'
import './RowPost.css'
import { API_KEY, imageUrl } from '../../constants/constants'
import axios from '../../axios'
import Youtube from 'react-youtube'
function RowPost(props) {
     const [movies,setmovies] = useState([])
     const [urlId, seturlId] = useState('')
     useEffect(() => {
           axios.get(props.url).then(response =>{
            console.log(response.data)
            setmovies(response.data.results)
           })
     }, [])
     const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        
        autoplay: 1,
      },
    };
    const handleMovie = (id)=> {
       console.log(id)
       axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
        if(response.data.results.length!==0){
          seturlId(response.data.results[0])
        } else{
          console.log('Trailer not Available')
        }
       })
    }
    return (
      <div className='row'>
        <h2>{props.title} </h2>
           <div className="posters">
            {movies.map((obj) =>
                        <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallpost' :'post'} src={`${imageUrl+obj.backdrop_path}`}  alt="post" />

            )}
   

           </div>
       {  urlId && <Youtube videoId={urlId.key} opts={opts}/>    }
      </div>
    )
  
}

export default RowPost
