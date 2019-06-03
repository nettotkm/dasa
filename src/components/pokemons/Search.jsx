import React from 'react';
import './Search.css';

const Search = ({ handleChange }) => {
  return (
    <div className="container-search">
      <input className="input" type="text" placeholder="Pesquise por um Pokemon" onChange={handleChange} />
    </div>
  );
};

export default Search;