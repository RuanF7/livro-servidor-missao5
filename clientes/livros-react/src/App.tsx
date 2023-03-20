import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ControleLivro } from './controle/ControleLivros';
import LivroDados from './LivroDados';
import LivroLista from './LivroLista'

/*
Menu com navegação entre as páginas
*/

const livros = new ControleLivro();

const App = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className='navbar-collapse'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' href='dados'>Catalogo</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='root'>Novo</a>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<LivroLista livros={livros} />} />
        <Route path='dados' element={<LivroLista livros={livros} />} />
        <Route path='root' element={<LivroDados livros={livros} />} />
      </Routes>
    </BrowserRouter>

  );

};

export default App;