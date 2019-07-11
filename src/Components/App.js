import React from 'react';
import SearchBar from './SearchBar';
import PokemonInfo from './PokemonInfo'
import pokeapi from '../api/pokeapi';

class App extends React.Component {
    state = { pokemon: '', picture: '', selectedPokemon: null, pokeId: null, catched: false };


    onPokemonSelect = (pokemon, pokeId, picture) => {
        console.log('From the App!', pokemon);
        console.log(this.state.pokeId)
        //TODO: create the logic to generate the list of catched pokemons
  };

    onSearchSubmit = async name => {
        const response = await pokeapi.get(name.toLowerCase());
  
        console.log(response)
  
        this.setState({ pokemon: response.data.name, pokeId: response.data.id, picture: response.data.sprites.front_default });
        this.setState({ catched: true });
      };

      render() {
        return (
        <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar onSearchSubmit={this.onSearchSubmit} />
            <PokemonInfo catched={this.state.catched} pokemon={this.state.pokemon} pokeId={this.state.pokeId} picture={this.state.picture} onPokemonSelect={this.onPokemonSelect} />
        </div>
        )
    }
}

export default App;