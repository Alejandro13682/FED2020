import React from 'react';
import { Link } from 'react-router-dom';


function ProductScreen(props) {
    const [products, setProduct] = React.useState([]);
    React.useEffect(function () {
        fetch('http://localhost:4000/products')
            .then(function (response) {
                return response.json();
            })
            .then(function (responseJSON) {
                setProduct(responseJSON);
            })
    }, []);
    console.log('El id del producto es: ' + props.match.params.id);
    const product = products.find(x => x._id === props.match.params.id);    if (!product) {
        return <div>Cargando...</div>;
    }
    else {
        return <div>
            <div className='back-to-result'><span><Link to='/'>Volver al listado</Link></span></div>
            <div className='details'>
                <div className='details-image'>
                    <img src={product.image} alt='detalles'></img>
                </div>
                <h1 className='productName'>{product.name}</h1>
                <div className='details-info'>
                    <ul>
                        <li>{product.name}</li>
                        <li>{product.brand}</li>
                        <li>Precio: $ {product.price}</li>
                    </ul>
                </div>
                <div className='details-action'>
                    <ul>
                        <li>Precio: $ {product.price}</li>
                        <li>Status: {product.status}</li>
                        <li>Qty: <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                        </li>
                        <li><button>Add to cart</button></li>
                    </ul>
                </div>
            </div>
        </div>
    }}
export default ProductScreen;