import React from 'react'
import './PostCC.css'

const Post = (props)=>{
  return (
    <div className= "card" id="bloc1">
        <h1>{props.username}</h1>
        <h3>{props.id}</h3>
        
    </div>
  )
}
export default Post