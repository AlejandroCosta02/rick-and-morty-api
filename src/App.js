import React, {useState, useEffect} from 'react';
import './App.css';
import Button_Component from './components/Button_Component';
import Card_Component from './components/Card_Component';
import axios from 'axios';
import random from 'random'
function App() {

  const url = `https://rickandmortyapi.com/api/character/`
  const [character, setCharacter] = useState({})
  const rn = random.int(0, 1000)

  const getRandomCharacter = ()=>{
    axios.get(url+rn).then((response)=>{
      setCharacter(response.data)
      console.log(character)
    })
  }

  
  const dataName = character.name;
  const dataImg = character.image;
  const dataType = character.species;
  return (
      <main className='container'>
        <h1>Rick & Morty App - API</h1>
        <Button_Component handleClick={getRandomCharacter}/>
        <hr />
        <Card_Component 
          dataName={dataName} 
          dataImg={dataImg} 
          dataType={dataType}
          
        />
      </main>
  );
}

export default App;
