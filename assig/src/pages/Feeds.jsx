import React, { useEffect, useState } from 'react'
import axios from "axios"

const Feeds = () => {
   const [data,setData]=useState([]);

   useEffect(()=>{
      axios.get("http://localhost:8080/feeds").then((res)=>{
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
   },[])

  return (
    <div>Feeds</div>
  )
}

export default Feeds