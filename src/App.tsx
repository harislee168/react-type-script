import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personObj = {
    fName: 'Person', lName: 'Object'
  }

  const personArray = ['Andy', 'Bony', 'Candy']
  return (
    <div className="App">
        <Greet name='Bruce' messageCount={10} isLoggedIn={true}/>
        <Person name={personObj} />
        <PersonList name={personArray} />
    </div>
  );
}

export default App;
