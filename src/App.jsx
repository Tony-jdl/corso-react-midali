import { useState } from 'react'
import './App.css'
import Card from './components/Card'
/* import DataCards from './data/data.json' */
import CardForm from './components/CardForm'

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
  const [cities, setCities] = useState([     
    {
      key: 1,
      isVisited: true,
      title: "Lago",
      imgUrl: "https://images.unsplash.com/photo-1708876954270-8fad10609e53?q=80&w=2117&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, quod?"
    },
    {
      key: 2,
      isVisited: false,
      title: "Oceano",
      imgUrl: "https://images.unsplash.com/photo-1695770169767-9bd2ca14a3c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere dolores eum assumenda, id eius quo ipsam deleniti natus saepe ea!"
    },
    {
      ke: 3,
      isVisited: true,
      title: "Persone",
      imgUrl: "https://images.unsplash.com/photo-1697397380024-01fb8332cc82?q=80&w=2111&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium explicabo aliquid eaque nostrum quibusdam tempora!"
    },
    {
      key: 4,
      isVisited: false,
      title: "Spiaggia",
      imgUrl: "https://plus.unsplash.com/premium_photo-1673002094359-6e2de18bf37b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sint asperiores distinctio possimus temporibus cumque assumenda officiis ullam eaque doloribus sequi eos perferendis vel aspernatur, a magnam beatae, voluptas sapiente?"
    }
  ]);
  

  const aggiungiItem = () => {
    const nuovoItem = 4;
    setItems([...items, nuovoItem]);
    console.log(items);
  }

  const updateUser = () => {
    const nuovoUser = {...user, name: "Bob", age: 26};
    setUser(nuovoUser);
  }

  const addCity = (nuovaCity) => {
    setCities([...cities, nuovaCity]);
  }

  

  return (
    <>
      <div>
        <CardForm
          addCity={addCity}
        ></CardForm>
        <div className='grid grid-cols-4 gap-5'>
          {
            cities
            /* .filter((city) => city.isVisited) */
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
