import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    render(){
        return(
            <header>
                <div className="logo">
                    <div><img src="https://cdn5.f-cdn.com/contestentries/1397362/8959055/5b7f8f88debbb_thumb900.jpg" alt="logo"/></div>
                </div>
                <nav>
                    <ul>
                        <li><Link to='/'>Inicio</Link></li>
                        <li><Link to='/tienda'>Tienda</Link></li>
                        <li><Link to='/usuario'>Usuario</Link></li>
                        <li><Link to='/carrito'>Carrito</Link></li>
                    </ul>
                </nav>
                <div className="botones">
                    <span>Ingresar</span><span>Crear cuenta</span>
                </div>
            </header>
        );
    }
}

export default Header;