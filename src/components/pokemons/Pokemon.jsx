import React from 'react';
import './Pokemon.css';

const Pokemon = ({ pokemon }) => {
  return (
    <div className="pokemon">
      <p className="name">{pokemon.name.charAt(0).toUpperCase()+ pokemon.name.slice(1)}</p>
      <p className="order">{pokemon.order}</p>
    </div>
  );
};

export default Pokemon;
