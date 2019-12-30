'use strict'

import React from 'react'
import PropTypes from 'prop-types';

const Actions = ({ handleRepos, handleStarred }) => (
    <div className="actions">
        <button onClick={handleRepos}>Ver Repositórios</button>
        <button onClick={handleStarred}>Ver Favoritos</button>
    </div>
);

Actions.prototypes = {
    handleRepos: PropTypes.func.isRequired
  }

export default Actions;