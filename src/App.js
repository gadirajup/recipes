import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {

  const APP_ID = "d8c7d2c4";
  const APP_KEY = "925872534c2dc547bad3f3fdd2a69c6b";
  const PROXY = 'https://cors-anywhere.herokuapp.com/'

  useEffect( () => {
    getRecipes()
  }, [])

  const getRecipes = async () => { 
    const response = await fetch(`${PROXY}https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`, {
      method: 'post',
      headers: {},
      body: {}
    })
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="App">
      <form className = "search-form">
        <input className="search-bar" type="text"></input>
        <button className="search-button" type="submit">
        Search
        </button>
      </form>
    </div>
  )
}

export default App;
