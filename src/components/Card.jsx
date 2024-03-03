import React from 'react'

function Card({id, title, imgUrl, description, isVisited, children}) {

  return (
    <div className='rounded-md bg-slate-900'>
      <img src={imgUrl} alt=""></img>
      <div className='flex flex-col p-4'>
        <h2 className='text-2xl text-white font-bold'>{title}</h2>
        <p className='text-gray-500'>{children}</p>
        <p className='text-gray-300'>{description}</p>
        <span>{`${isVisited ? "✅ visitata" : "❌ non visitata"}`}</span>
      </div>
    </div>
  )
}
    
export default Card;