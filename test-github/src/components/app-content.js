'use strict'

import React from 'react'
import Search from './search';
import UserInfo from './user-info';
import Repos from './repos';
import Actions from './actions';
import PropTypes from 'prop-types';

const AppContent = ({ userInfo, repos, starred, handleSearch }) => (
    <div className="App">
        <Search handleSearch={handleSearch} />
        
        {!!userInfo && <UserInfo userInfo={userInfo} />}
          
        {!!userInfo && <Actions />}
  
        {!!repos.length && <Repos 
          className="repos-container"
          title="Repositórios"
          repos={repos}
        />}
  
        {!!starred.length &&  <Repos 
          className="starred"
          title="Favoritos"
          repos={starred}
        />}
  
    </div>
)

AppContent.prototypes = {
    userInfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired 
}

export default AppContent