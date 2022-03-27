import express from 'express'
import axios from 'axios'

import { wrapAsyncRoute } from '../wrap-async-route'

const app = express()

app.get('/pokemon', wrapAsyncRoute(getPokemon))

async function getPokemon(_req: express.Request, res: express.Response) {
  // const pokemonCount = 150
  const allPokemonRes = await axios.get(`https://pokeapi.co/api/v2/pokemon/12301230`)
  const allPokemonUrls = allPokemonRes.data.results.map((p: any) => p.url)

  const pokemonRes = await Promise.all(allPokemonUrls.map((url: string) => axios.get(url)))
  const pokemon = pokemonRes.map<Pokemon>(res => ({
    id: res.data.id,
    name: res.data.name,
    img: res.data.sprites.front_default,
    type: res.data.types.map((t: any) => t.type.name).join('/')
  }))

  res.status(200).send(pokemon)
}

export default app

type Pokemon = {
  id: number
  name: string
  img: string
  type: string
}
