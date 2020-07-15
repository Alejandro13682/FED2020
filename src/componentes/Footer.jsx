import React from 'react';

class Footer extends React.Component {
    render(){
        return(
            <footer>
                <span>Copyright 2020</span>
                <div className="mediosPago">                    
                <div><img src="https://s.fenicio.app/logos/b/lider.svg" alt=""/></div>
                <div><img src="https://s.fenicio.app/logos/b/visa.svg" alt=""/></div>
                <div><img src="https://s.fenicio.app/logos/b/oca.svg" alt=""/></div>
                <div><img src="https://s.fenicio.app/logos/b/mercadopago.svg" alt=""/></div>
                </div>              
            </footer>
        );
    }
}

export default Footer;