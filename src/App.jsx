import { useEffect, useState } from 'react'
import './App.css'
import Character from './components/Character';

function App() {
  const [characters, setCharacters]= useState([]);
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(res => setCharacters(res.results))
    .catch(error => console.log(error))
  })

  return (
    <>
      {characters.map((character) => <Character character={character}/>)}
    </>
  )
}

export default App
