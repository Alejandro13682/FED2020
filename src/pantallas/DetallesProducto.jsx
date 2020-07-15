import React from 'react';
import { Link } from 'react-router-dom';



function DetallesProducto(props) {
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
   
    const product = products.find(x => x._id === props.match.params.id);    
   
    if (!product) {
        return <div>Cargando...</div>;
    }
else { return   <div className="detallesProducto"> 
                    <div className="descripcion">                   
                        <div className='volverListado'>
                            <span><Link to='/tienda'>Volver al listado</Link></span>
                        </div>
                        <div className='fotosProd'>                           
                            <div className="mini">
                                <div><img src="https://picsum.photos/85/100" alt=""/></div>
                                <div><img src="https://picsum.photos/85/100" alt=""/></div>
                                <div><img src="https://picsum.photos/85/100" alt=""/></div>
                                <div><img src="https://picsum.photos/85/100" alt=""/></div>                                
                            </div>
                            <div className="foto"><img src={product.image} alt='foto'/></div>                        
                        </div>
                        <div className="compra">
                            <div className="detallesDelProducto">
                                <div className="contenedorDetalles">
                                    <div className="nombre">{product.name}</div>
                                    <div className="marca">Marca: {product.brand}</div>
                                    <div className="prec">Precio: $ {product.price}</div>
                                    <div className="financiacion">
                                        <span>Financiacion: </span>
                                        <span>2 x </span>
                                        <span>4 x </span>
                                        <span>6 x </span>
                                    </div> 
                                </div> 
                                <div className="contenedorCompra">                              
                                    <div className="comprar">
                                        <div className="talles">
                                            <div>Talles disponibles</div>
                                            <span>{product.size1}</span>
                                            <span>{product.size2}</span>
                                            <span>{product.size3}</span>
                                            <span>{product.size4}</span>
                                        </div>                                       
                                    </div>
                                    <div className="formaPago">Forma de pago</div>
                                     <div className="formaEntrega">Forma de entrega</div>
                                </div>
                                <div className="botFav-botComp">
                                    <span>favoritos</span>
                                    <span>Comprar</span>
                                </div>
                            </div>
                        </div>
                        <div className="sugerencias">
                            <span>Basado en tus gustos</span>
                            <div className="fav">                                
                                <div><img src="https://static.zara.net/photos///2020/I/0/2/p/0679/301/250/2/w/458/0679301250_6_1_1.jpg?ts=1594049206100" alt=""/></div>
                                <div><img src="https://static.zara.net/photos///2020/S/0/2/p/3057/365/615/2/w/1135/3057365615_1_1_1.jpg?ts=1593702915411" alt=""/></div>
                                <div><img src="https://static.zara.net/photos///2020/S/0/2/p/5575/477/800/2/w/1135/5575477800_6_1_1.jpg?ts=1593444982206" alt=""/></div>
                                <div><img src="https://static.zara.net/photos///2020/I/0/2/p/6766/403/800/2/w/458/6766403800_1_1_1.jpg?ts=1593504996837" alt=""/></div>   
                            </div>
                        </div>
                    </div>
                </div>
            
    }}

export default DetallesProducto;