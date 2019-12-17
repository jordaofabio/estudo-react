'use strict'

import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ handleSearch }) => (
    <div className="search">
        <input
          type="search"
          placeholder="Digite o nome do usuário no Github"
          onKeyUp={handleSearch}
        />
      </div>
);

Search.prototypes = {
  handleSearch: PropTypes.func.isRequired
}

export default Search;