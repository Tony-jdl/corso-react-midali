import React from 'react'

function CardForm({addCity}) {
  const handleClick = () => {
    const newCity = {
      key: 5,
      isVisited: true,
      title: "POrtogallo",
      imgUrl: "https://images.unsplash.com/photo-1663340284228-ff9a2cdd3f02?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sint asperiores distinctio possimus temporibus cumque assumenda officiis ullam eaque doloribus sequi eos perferendis vel aspernatur, a magnam beatae, voluptas sapiente?"
    }
    addCity(newCity);
  }

  return (
    <div className='flex flex-col gap-3 w-80 mb-10†'>
        <input className='bg-gray-500' type="text" name="" id="" />
        <input className='bg-gray-500' type="text" name="" id="" />
        <input className='bg-gray-500' type="text" name="" id="" />
        <button className='bg-gray-300' onClick={handleClick}>Aggiungi Card</button>
    </div>
  )
}

export default CardForm