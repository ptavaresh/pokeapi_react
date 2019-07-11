import React from 'react';
import '../css/PokeInfo.css'

const PokemonInfo = ({ pokemon, pokeId, picture, onPokemonSelect, catched}) => {

    if (!catched) {
        return(
        <div>
            <img className="pokeball" src="https://ui-ex.com/images/pokeball-transparent-small-2.png"/>
            <p className="message">Please type a pokemon name in the Pokemon serch bar and press Enter.</p>
        </div>
            )
    }
    console.log(catched)
    return(
        <div className="ui card">
        <div className="content">
          <div className="center aligned header">{pokemon}</div>
          <div className="center aligned description">
            <p>
              # {pokeId}
            </p>
          </div>
        </div>
        <div className="extra content">
          <div className="center aligned author">
            <img className="center aligned author" src={picture}/>
            <button 
                className="ui primary button" 
                onClick={() => onPokemonSelect(pokemon, pokeId, picture)}
            >
                Catch {pokemon}?
                </button>
          </div>
        </div>
      </div>
    )
};

export default PokemonInfo;