import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import FiltroProductos from '../componentes/FiltroProductos';

function Tienda (props){

    const [products, setProduct] = React.useState([]);
    useEffect(function(){
        fetch('http://localhost:4000/products')
        .then(function(response){
        return response.json();
        })
        .then(function(responseJSON){
            setProduct(responseJSON);
        })
    }, []);   

    console.log(products)
    
    return <div className='tienda'>
                <div className="titulotienda"><h1>Nuestro catalogo</h1></div>             
                <div className="filtros">
                    <span>Filtros</span>                    
                    <FiltroProductos />
                </div>
                <div className="catalogo">{products.map(product =>
                    <div className='tarjeta-producto'>  
                        <Link to={'/detallesProd/' + product._id}>          
                        <div className='tarjeta-imagen'> <img src={product.image} alt='foto'/></div>
                        </Link>
                        <div className='detalles-producto'>
                            <div className='datos-basicos'>
                                <div className='nombre-producto'><Link to={'/detallesProd/' + product._id}>{product.name}</Link></div>
                                <div className='marca'>{product.brand}</div>
                                <div className='precio'>${product.price}</div>
                            </div>
                            <div className='agregar-carrito'>
                                <span>Agregar al carrito</span>
                            </div>
                        </div>
                    </div>)}
                </div>
                <aside></aside>
            </div>
        }
                    
export default Tienda;

