import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="search">
        <input
          type="search"
          placeholder="Digite o nome do usuário no Github"
        />
      </div>
      <div className="user-info">
        <img src='https://avatars1.githubusercontent.com/u/24848934?v=4' />
        <h1><a href="https://www.github.com/jordaofabio" target="_blank">Fabio Jordão</a></h1>
      <ul className="repos-info">
        <li>Repositórios: 50</li>
        <li>Seguidores: 50</li>
        <li>Seguindo: 50</li>
      </ul>

      <div className="actions">
        <button>Ver Repositórios</button>
        <button>Ver Favoritos</button>
      </div>

      <ul className="repos">
        <h2>Repositíos</h2>
        <li><a href="#">Nome do repositório</a></li>
      </ul>

      <ul className="starred">
        <h2>Favoritos</h2>
        <li><a href="#">Nome do repositório</a></li>
      </ul>
      </div>
    </div>
  );
}

export default App;
