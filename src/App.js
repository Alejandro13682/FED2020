import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Header from './componentes/header';
import Inicio from './pantallas/Inicio';
import Footer from './componentes/Footer';
import Usuario from './pantallas/Usuario';
import Carrito from './pantallas/Carrito';
import DetallesProducto from './pantallas/DetallesProducto';
import Tienda from './pantallas/Tienda';

function App() {
 return (
  <div className='grid-container'>
    <BrowserRouter>    
    <Header />        
    <Switch>
      <Route exact path='/'>
        <Inicio />        
      </Route>
    </Switch>
    <Switch>
      <Route path='/tienda'>
        <Tienda />
      </Route>
    </Switch>   
    <Switch>
      <Route path='/detallesProd/:id' component={DetallesProducto}>       
      </Route>
    </Switch>
    <Switch>
      <Route path='/usuario'>
        <Usuario />
      </Route>
    </Switch>
    <Switch>
      <Route path='/carrito'>
        <Carrito />        
      </Route>
    </Switch>
     <Footer />
    </BrowserRouter>
  </div>   
 )
}

export default App;

