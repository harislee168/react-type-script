import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Basic/Greet';
import { Person } from './components/Basic/Person';
import { PersonList } from './components/Basic/PersonList';
import { Status } from './components/Basic/Status';
import { Heading } from './components/Basic/Heading';
import { Oscar } from './components/Basic/Oscar';
import { Button } from './components/Event/Button';

function App() {
  const personObj = {
    fName: 'Person', lName: 'Object'
  }

  const personArray = ['Andy', 'Bony', 'Candy']
  return (
    <div className="App">
        {/* <Greet name='Bruce' messageCount={10} isLoggedIn={true}/>
        <Person name={personObj} />
        <PersonList name={personArray} />
        <Status status='loading'/>
        <Oscar><Heading>Oscar goes to Leonardo</Heading></Oscar> */}
        <Button clickHandler={(event, id) => console.log('Button clicked', event, id)}/>
    </div>
  );
}

export default App;
