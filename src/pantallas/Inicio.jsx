import React from 'react';
import {Link} from 'react-router-dom';
import Slider from '../componentes/Slider';
import Destacados from '../componentes/Destacados';


function Inicio(props) {
    const [portada, cambiarFoto] = React.useState([]);
    React.useEffect(function(){
        fetch('http://localhost:4000/portada')
        .then(function(response){
        return response.json();
        })
        .then(function(responseJSON){
            cambiarFoto(responseJSON);
        })
    }, []); 
    console.log(portada);
    if (!portada) {
        return <div>Cargando...</div>;
    }
else {        
    return  <div className='pag-inicio'>        
                <div className="portada">  
                <Slider />                                     
                    
                </div>                  
                <div className="destacados">
                   <Destacados />
                </div>
                
             
            </div>
    }
}

export default Inicio;