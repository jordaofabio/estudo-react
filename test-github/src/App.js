import React from 'react';
import Search from './components/search';
import UserInfo from './components/user-info';
import Repos from './components/repos';
import Actions from './components/actions';

function App() {
  return (
    <div className="App">
      <Search />
      
      <UserInfo />
        
      <Actions />

      <Repos 
        className="repos-container"
        title="Repositórios"
        repos={[{
          name: 'Teste',
          link: 'teste.html'
        }]}
      />

      <Repos 
        className="starred"
        title="Favoritos"
        repos={[{
          name: 'Teste',
          link: 'teste.html'
        }]}
      />

  </div>
  );
}

export default App;
