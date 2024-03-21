import React, { useEffect, useState, useContext } from 'react'
import { ProvaContext } from '../stores/ProvaContext'

const Example = () => {
  const {count, setCount} = useContext(ProvaContext);

  return (
    <div>
        <p>Conteggio: {count}</p>
        {/* <button onClick={handleClick}>Incrementa</button> */}
        <button onClick={() => setCount(count +1)}>Incrementa</button>
    </div>
  )
}

export default Example