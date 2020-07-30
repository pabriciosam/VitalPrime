import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './Pages/Cadastro/Videos';
import CadastroCategoria from './Pages/Cadastro/Categoria';

const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Route path="/" component={Home} exact/>
    <Route path="/Cadastro/Videos" component={CadastroVideo}/>
    <Route path="/Cadastro/Categoria" component={CadastroCategoria} />
    <Route component={Pagina404}/>
    </Switch>
  </BrowserRouter>,
document.getElementById('root')
);