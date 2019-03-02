import React, { useState } from 'react'
import pikachu from './pikachu.png'
import squirtle from './squirtle.png'
import jigglypuff from './jigglypuff.png'
import charmander from './charmander.png'
import './App.css'

function Pokemon ({ pokemonImage }) {
  const [reveal, setReveal] = useState(false)
  let className = 'pokemon'

  if (reveal) {
    className += ' reveal'
  }

  return (
    <img
      src={pokemonImage}
      className={className}
      alt='Pokemon'
      onClick={() => setReveal(!reveal)}
    />
  )
}

const POKEMON_LIST = [
  pikachu,
  squirtle,
  jigglypuff,
  charmander
]

function App () {
  const [index, setIndex] = useState(0)

  return (
    <div>
      <div className='App'>
        <Pokemon
          key={index}
          pokemonImage={POKEMON_LIST[index % POKEMON_LIST.length]}
        />
      </div>
      <button
        className='next-pokemon-button'
        onClick={() => setIndex(index + 1)}
      >
        Next pokemon
      </button>
    </div>
  )
}

export default App
