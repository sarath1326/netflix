import React from 'react'
import { useEffect,useState } from 'react'
import axios from '../../axios'
import {Imgurl,Api_Key } from '../../Constant/Constants'
import Youtube from "react-youtube"


import "./Rowpost.css"


function Rowpost(props) {

  const[movie,setmovie]=useState([])  

  const[video,setvideo]=useState()


  useEffect(()=>{
    axios.get(props.Urls).then((response)=>{

      setmovie(response.data.results)


    })

  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
     autoplay: 0,
    },
  };

  function movietrailer(id){

   

   axios.get(`/movie/${id}/videos?api_key= ${Api_Key}&language=en-US`).then((response)=>{

    console.log(response.data.results)

    setvideo(response.data.results[0])

             

             
             

   })


  }


  return ( 

       <div className='row'>
        <h2> { props.title}</h2>
        <div className='posters'>

          { 

          movie.map((obj)=>

        (
        <div>
           
          
          <img onClick={()=>movietrailer(obj.id)} className={ props.issamll ? 'smalposter':'poster'} src={`${Imgurl+obj.backdrop_path}`} alt='img is loding'   />
          
          <h3>{props.issamll?obj.title: obj.name} </h3>
      
      </div>
        )

          
          )
         
      
          }

        </div>

       { video && < Youtube opts={opts} videoId= {video.key} />}

        </div>
        


      
      
        



    
  )
}

export default Rowpost 