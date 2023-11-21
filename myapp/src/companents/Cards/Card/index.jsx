import React from 'react'
import "./card.css"

const Card=(x)=> {
  return (
    <>
      
      <div className='card'>
        <img src="https://i.pinimg.com/1200x/2a/83/08/2a83085eafee007ccca0d6d62bb64ef8.jpg" alt="" />
        <p>{x.title}</p>

      </div>



    </>
    
  )
}

export default Card