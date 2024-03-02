import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import DataCards from './data/data.json'

function App() {
  const [count, setCount] = useState(0)
  /* const [visited, setVisited] = useState(false) */

  return (
    <>
      <div>
        <div className='flex grid-cols gap-10'>
          {
            DataCards.cities
            .filter((city) => city.isVisited)
            .map((city) => (
              <Card
              isVisited={city.isVisited}
              title={city.title} 
              imgUrl={city.imgUrl}
              description={city.description}
              />
            ))
          }
          {/* <Card 
            isVisited={DataCards.cities[0].isVisited}
            title={DataCards.cities[0].title} 
            imgUrl={DataCards.cities[0].imgUrl}
            description={DataCards.cities[0].description}
          />
          <Card 
            isVisited={DataCards.cities[1].isVisited}
            title={DataCards.cities[1].title} 
            imgUrl={DataCards.cities[1].imgUrl}
            description={DataCards.cities[1].description}
          />
          <Card 
            isVisited={DataCards.cities[2].isVisited}
            title={DataCards.cities[2].title} 
            imgUrl={DataCards.cities[2].imgUrl}
            description={DataCards.cities[2].description}
          />
          <Card 
            isVisited={DataCards.cities[3].isVisited}
            title={DataCards.cities[3].title} 
            imgUrl={DataCards.cities[3].imgUrl}
            description={DataCards.cities[3].description}
          /> */}
        </div>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* <div className="card">
        <button onClick={() => setVisited((visited) => visited ? visited=false : visited=true)}>
          show/hide not visited
        </button>
      </div> */}
    </>
  )
}

export default App
