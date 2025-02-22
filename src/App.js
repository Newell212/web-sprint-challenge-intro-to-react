import React, {useState, useEffect} from 'react';
import Character from './components/Character.js';
import axios from 'axios';
import styled from 'styled-components';

const App = () => {
  const [characters, setCharacters] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
      console.log(res);
      setCharacters(res.data)
    })
    .catch(err => console.error(err))
  }, [])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const StyledListItem = styled.li`list-style-type: none;`;

  const charactersList = characters.map((character) => <StyledListItem key={character.name}>{Character(character)}</StyledListItem>);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <ul>{charactersList}</ul>
    </div>
  );
}

export default App;
