import React from 'react';
import InfoDestacados from './InfoDestacados';

function Destacados(){
    return( 
            <>
            <div className='promo1'>
            <InfoDestacados />
                <div>                  
                <img src="https://images.unsplash.com/photo-1520975916090-3105956dac38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" alt="promo1"/>
                </div>
             </div> 
            <div className='promo2'>
                <div>               
                <img src="https://images.unsplash.com/photo-1578238591955-f360d5eda965?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" alt="promo2"/>
                </div>
                <InfoDestacados />
            </div>
            </> );
}

export default Destacados;