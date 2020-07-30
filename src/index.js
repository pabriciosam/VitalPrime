import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './Pages/Cadastro/Videos';

const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Route path="/" component={Home} exact/>
    <Route path="/Cadastro/Videos" component={CadastroVideo}/>
    <Route component={Pagina404}/>
    </Switch>
  </BrowserRouter>,
document.getElementById('root')
);