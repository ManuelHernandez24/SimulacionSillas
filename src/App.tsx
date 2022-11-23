import React from 'react';
import logo from './logo.svg';
import './App.css';

const name = 'Victor Estevez'
const element = <h1>Manuel Hernandez</h1>
const enlace = "https://www.google.com"
const url = <a href={enlace}>Google</a>


const user = {
  firstName: 'Manuel',
  lastName: 'Hernandez'
}

const fullName = (user: any) => {
  return user.firstName + ' ' + user.lastName;
}

function App() {
  return (
    <div className="jsx-ejercicio">
      {fullName(user)}
      {url}
    </div>
  );
}

export default App;
