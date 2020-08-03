import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroMusica from '../src/pages/cadastro/musica';
import CadastroCategoria from '../src/pages/cadastro/categoria';
import Player from '../src/pages/player';
import Error from '../src/pages/error';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/cadastro/musica" component={CadastroMusica}/>
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route component={Error}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
