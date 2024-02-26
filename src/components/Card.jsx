import React from 'react'

function Card({title, imgUrl, children}) {

  return (
    <div className='rounded-md bg-slate-900'>
      <img src={imgUrl} alt=""></img>
      <div className='flex flex-col p-4'>
        <h2 className='text-2xl text-white font-bold'>{title}</h2>
        <p className='text-gray-500'>{children}</p>
      </div>
    </div>
  )
}

{/* <div className='rounded-md bg-slate-900'>
      <img src="https://images.unsplash.com/photo-1708876954270-8fad10609e53?q=80&w=2117&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""></img>
      <div className='flex flex-col p-4'>
        <h2 className='text-2xl text-white font-bold'>Titolo</h2>
        <p className='text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga beatae blanditiis dicta qui, aperiam vel culpa ullam expedita mollitia totam nulla tempora, possimus consequatur! Beatae numquam nemo vel corporis delectus.</p>
      </div>
    </div> */}
    
export default Card;