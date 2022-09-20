


import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostAction } from '../store/post/Post.Action'


const Post = () => {

   const {cartData}=useSelector(store=>store.post)
   const token=useSelector(store=>store.auth.token)
    const dispatch=useDispatch();

    useEffect(()=>{
       dispatch(PostAction(token))
    },[])
  return (
    <div>
        {cartData?.map((cart)=>(
            <h2 key={cart._id}>{cart.quantity}</h2>
        ))}
    </div>
  )
}

export default Post