'use strict'

import React from 'react'
import Search from './search';
import UserInfo from './user-info';
import Repos from './repos';
import Actions from './actions';
import PropTypes from 'prop-types';

const AppContent = ({ userInfo,
                      repos,
                      starred,
                      handleSearch,
                      handleRepos,
                      handleStarred,
                      showRepos,
                      showStarred,
                      isFeching
                     }) => (
    <div className="App">
        <Search handleSearch={handleSearch} isDisabled={isFeching} />
        {isFeching && <div>Carregando...</div>}
        {!!userInfo && <UserInfo userInfo={userInfo} />}
          
        {!!userInfo && <Actions handleRepos={handleRepos} 
          handleStarred={handleStarred}
        />}
  
        {(!!repos.length && showRepos) && <Repos 
          className="repos-container"
          title="Repositórios"
          repos={repos}
        />}
  
        {(!!starred.length && showStarred) &&  <Repos 
          className="starred"
          title="Favoritos"
          repos={starred}
        />}
  
    </div>
)

AppContent.prototypes = {
    userInfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired,
    isFeching: PropTypes.bool.isRequired,
    handleSearch: PropTypes.func.isRequired,
    showRepos: PropTypes.func.isRequired,
    handleStarred: PropTypes.func.isRequired
}

export default AppContent