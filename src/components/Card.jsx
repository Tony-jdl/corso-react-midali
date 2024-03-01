import React from 'react'

function Card({title, imgUrl, isVisited, children}) {

  const visitedLable = isVisited ? "✅ visitata" : "❌ non visitata";
  return (
    <div className='rounded-md bg-slate-900'>
      <img src={imgUrl} alt=""></img>
      <div className='flex flex-col p-4'>
        <h2 className='text-2xl text-white font-bold'>{title}</h2>
        <p className='text-gray-500'>{children}</p>
        <span>{`${isVisited ? "✅ visitata" : "❌ non visitata"}`}</span>
        {isVisited ? <span>✅ visitata</span> : <span>❌ non visitata</span>}
        <span>{visitedLable}</span>

        <p>Con operatore &&</p> {/* permette di renderizzare un elemento in funzione al valore della variabile antecedente al && */}
        {isVisited && <span>✅ visitata</span>}
        {!isVisited && <span>❌ non visitata</span>}
      </div>
    </div>
  )
}
    
export default Card;