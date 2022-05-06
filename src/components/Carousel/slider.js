import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import stock from '../../assests/Icons/stock.png'
import stockImg from '../../assests/Icons/stockImg.png'


const Slider =()=>{
    return(
        <Carousel>
            <div>
                <img src={stock} />
            </div>
            <div>
                <img src={stockImg} />
            </div>
        </Carousel>
        )
}

export default Slider