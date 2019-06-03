import React, { Component } from 'react';
import Pokemon from './Pokemon';
import Search from './Search';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonsList: this.props.po,
      search: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.pokemonList = this.pokemonList.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const search = e.target.value.toLowerCase();
    this.setState({search})
  }

  pokemonList() {
    const pokemonslist = [...this.props.pokemons];
    const search = this.state.search;
    const reLetters = new RegExp(search, 'gi') 
    const reVowels = new RegExp(/[aeiou]/, 'gi')
    return pokemonslist.filter(pokemon => {
      if (pokemon.name.match(reLetters) || pokemon.name.replace(reVowels, '').match(reLetters)) {
        return pokemon;
      }
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          <Search handleChange={this.handleChange} />
          <div>
            <h3 className="description">Notas</h3>
            {this.pokemonList().map((pokemon, idx) => {
              return  <Pokemon pokemon={pokemon} key={idx} />
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;