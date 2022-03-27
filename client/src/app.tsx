import { useEffect, useState } from 'react'
import axios from 'axios'

import './app.css'

const App = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>(null)

  useEffect(() => {
    const fetchHealth = async () => {
      const res = await axios.get('http://localhost:3001/api/pokemon')
      setPokemon(res.data)
    }

    fetchHealth().catch(console.error)
  }, [])

  if (!pokemon)
    return <div>loading...</div>

  return (
    <div className="container">
      <div className="table">
        <div className="header row">
          <div className="cell">Id</div>
          <div className="cell">Image</div>
          <div className="cell">Name</div>
          <div className="cell">Type</div>
        </div>
        {pokemon.map(p => (
          <div className="row">
            <div className="cell">{p.id}</div>
            <div className="cell"><img src={p.img}/></div>
            <div className="cell">{p.name}</div>
            <div className="cell">{p.type}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App

type Pokemon = {
  id: number
  name: string
  img: string
  type: string
}
