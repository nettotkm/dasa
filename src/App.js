import React, { Component } from 'react';
import axios from 'axios';
import Home from './components/pokemons/Home';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
		  pokemons: [],
    }
    this.pokemonsList = this.pokemonsList.bind(this);
  }

  pokemonsList() {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    	.then(response => {
        this.setState({ pokemons: response.data.results })
			})
			.catch(error => console.log(error))
  }

  componentDidMount() {
    this.pokemonsList()
  }

  render() {
    return (
      <div>
        <div className="title">
          <h1>Pokemons</h1>
        </div>
        <Home pokemons={this.state.pokemons} />
      </div>
    );
  }
}

export default App;