import React, {useState} from 'react';
import ImgSlider from '../componentes/imgSlider';
import i1 from "../img/i1.jpg";
import i2 from "../img/i2.jpg";
import i3 from "../img/i3.jpg";
import i4 from "../img/i4.jpg";


function Slider(){
    let sliderArr = [<ImgSlider src={i1}/>, <ImgSlider src={i2}/>, <ImgSlider src={i3}/>, <ImgSlider src={i4}/>];
    const [x, setX] = useState(0)
    let movIzq =()=>{
       x === 0 ? setX(-100*(sliderArr.length-1)) : setX(x + 100);
    };
    let movDer =()=>{
        (x === -100*(sliderArr.length-1)) ? setX(0) : setX(x - 100);
    };
    return (
        <div className="slider">
           {
            sliderArr.map((item, index)=>{
                return(
                    <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
                        {item}           
                    </div>
                   );
               })}
            <button id="btn-izq" onClick={movIzq}><i class="fas fa-chevron-left"></i></button>
            <button id="btn-der" onClick={movDer}><i class="fas fa-chevron-right"></i></button>
        </div>
    );
}
export default Slider;