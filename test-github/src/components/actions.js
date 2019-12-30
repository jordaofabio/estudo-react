'use strict'

import React from 'react'
import PropTypes from 'prop-types';

const Actions = ({ handleShowRepos, handleShowStarred }) => (
    <div className="actions">
        <button onClick={handleShowRepos}>Ver Repositórios</button>
        <button onClick={handleShowStarred}>Ver Favoritos</button>
    </div>
);

Actions.prototypes = {
    handleShowRepos: PropTypes.func.isRequired
  }

export default Actions;