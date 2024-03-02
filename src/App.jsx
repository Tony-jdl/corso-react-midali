import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import DataCards from './data/data.json'

function handleClick() {
  alert("Ciao")
}

function handleChange(e) {
  console.log(e.target.value);
}

function handleSubmit(e) {
  e.preventDefautl();
  console.log("Submitted");
}

function App() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState([1,2,3])
  const [user, setUser] = useState({name: "Alice", age: 30})

  const aggiungiItem = () => {
    const nuovoItem = 4;
    setItems([...items, nuovoItem]);
    console.log(items);
  }

  const updateUser = () => {
    const nuovoUser = {...user, name: "Bob", age: 26};
    setUser(nuovoUser);
  }

  return (
    <>
      <div>
        <div className='flex grid-cols gap-10'>
          {
            DataCards.cities
            .filter((city) => city.isVisited)
            .map((city) => (
              <Card
              key={city.key}
              isVisited={city.isVisited}
              title={city.title} 
              imgUrl={city.imgUrl}
              description={city.description}
              />
            ))
          }
        </div>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count++)}>Count is {count}</button>
        <button onClick={aggiungiItem}>Items</button>
        <button onClick={handleClick}>Alert</button>
        <input type="text" onChange={handleChange}/>
        <form onSubmit={handleSubmit} action="">
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
