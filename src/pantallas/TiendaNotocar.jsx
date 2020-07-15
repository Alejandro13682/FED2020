import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';


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

   
    return <div className='tienda'>
            <div className="filtros">Filtros</div>
    {       
        products.map(product =>
            
            <div className='tarjeta-producto'>  
                    <Link to={'/detallesProd/' + product._id}>          
                <div className='tarjeta-imagen'> <img src={product.image} alt='foto'/></div>
                    </Link>
                <div className='product-details'>
                    <div className='basic-data'>
                    <div className='product-name'>
                        <Link to={'/detallesProd/' + product._id}>{product.name}</Link>
                    </div>
                    <div className='product-brand'>{product.brand}</div>
                    <div className='product-price'>${product.price}</div>
                    </div>
                    <div className='add-to-cart'>
                    <span>Agregar al carrito</span>
                    </div>
                </div>
            </div>)
            
        }
            </div>
    }

export default Tienda;