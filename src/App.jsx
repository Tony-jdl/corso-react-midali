import { useEffect, useReducer, useState, useContext } from 'react'
import './App.css'
import Card from './components/Card'
import CardForm from './components/CardForm'
import Example from './components/Example'
import { ProvaContext } from './stores/ProvaContext'

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

function formReducer(state, action) {
  switch(action.type){
    case "CHANGE_FIELD":
      return{...state, [action.field]: action.value}
    case "RESET_FORM":
      return {name: '', email:''}
    default:
      return state;
  }
}

function App() {
  const [count, setCount] = useState(0)
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
      key: 3,
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
  const [datas, setDatas] = useState([]);
  const [formState, dispatchFormState] = useReducer(formReducer, {name:'', email:''});


  const addCity = (nuovaCity) => {
    setCities([...cities, nuovaCity]);
  }

  const handleFieldChange = (field, value) => {
    dispatchFormState({type: "CHANGE_FIELD", field, value})
  }

  const resetForm = (e, field, value) => {
    e.preventDefault();
    dispatchFormState({type: "RESET_FORM", field, value})
  }

  const sendForm = () => {
    /* dispatchFormState({type: "SEND_FIELD", field, value}) */
    console.log(formState);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((datas) => {
        setDatas(datas);
        console.log(datas);
      })
  }, [count]);

  return (
    <ProvaContext.Provider value={{ count, setCount }}>
      <div className='container flex flex-row'>
        {/* Form useEffect con resert */}
        <form action="">
          <div>
            < label htmlFor="name">Nome: </label >
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={(e) => handleFieldChange("name", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={(e) => handleFieldChange("email", e.target.value)}
            />
          </div>
          <button onClick={resetForm}>Resetta</button>
          <button onClick={sendForm}>Invia</button>
        </form>
        {/* Form useEffect con resert */}
      </div>

      {/* Card Cities - inizio */}
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
      {/* Card Cities - inizio */}

      <Example></Example>   
    </ProvaContext.Provider>
  )
}

      export default App
