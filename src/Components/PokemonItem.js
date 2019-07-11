import React from 'react';

const PokemonItem = ({ pokemon, pokeId, picture }) => {
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
            <img className="center aligned author" src={picture}/> {pokemon}
          </div>
        </div>
      </div>       
    )
}

export default PokemonItem;