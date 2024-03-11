import React, { useEffect, useState } from 'react'

const Example = () => {
  const [count, setCount] = useState(0);

  // useEffect()
  useEffect(() => {
    localStorage.setItem('Count', count.toString());
    document.title = `Conteggio: ${count}` ;
    console.log("sono useEffect()");
  }, [count]);

  /* const handleClick = () => {
    setCount(count++);
    document.title = 'Conteggio: ' + {count};
  } */

  return (
    <div>
        <p>Conteggio: {count}</p>
        {/* <button onClick={handleClick}>Incrementa</button> */}
        <button onClick={() => setCount(count +1)}>Incrementa</button>
    </div>
  )
}

export default Example