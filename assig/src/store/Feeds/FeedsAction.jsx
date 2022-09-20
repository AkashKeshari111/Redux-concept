
import React from 'react'
import { ERROR_FEEDS, LOADING_FEEDS, SUCCESS_FEEDS } from './FeedsType'
import axios from "axios"

export const FeedsAction = () => {
       dispatch({type:LOADING_FEEDS})
       axios.get("http://localhost:8080/feeds").then((res)=>{
        dispatch({type:SUCCESS_FEEDS,payload:res.data})
        return res.data
       }).catch((err)=>{
        dispatch({type:ERROR_FEEDS})
       })
}

