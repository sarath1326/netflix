import React, { useEffect } from 'react'
import { useState } from 'react'
import {Api_Key,Imgurl} from "../../Constant/Constants"
import axios from '../../axios'
import "./Banner.css"

function Banner() {

  const [title,settitle]=useState()

  let num=0

  useEffect(()=>{

    
   



    axios.get(`trending/all/week?api_key=${Api_Key}&language=en-US`).then((response)=>{

     settitle(response.data.results[0])      


    })
  



  },[])

  console.log(num)

 
  

  



  return (
    <div  
    style={{backgroundImage:`url(${title ? Imgurl+title.backdrop_path :""})`}}
    
    className='banner'>
       <div className='content'>
            <h1 className='title'>{title ? title.title : ""}</h1>
            <div className='banner_buttons'>
                <button className='button'> play</button>
                <button className='button'>my list</button>



            </div>
            <h1 className='discr'>{title ? title.overview :""} </h1>




        </div>
        <div className='fade'>


          
        </div>







    </div>
  )
}

export default Banner