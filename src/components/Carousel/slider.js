import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import stock from '../../assests/Icons/stock.png'
import stockImg from '../../assests/Icons/stockImg.png'


const Slider =()=>{

    const [index , setIndex ] = useState(false)
    let display1
    let display

    const handleNext=()=>{
        setIndex(!index)
    }
    if(index){
        display= "carousel-item active"
        display1 = 'carousel-item'
        setTimeout(()=>{
            setIndex(!index) 
        }, 8000)
    } else {
        display1 = "carousel-item active"
        display = 'carousel-item'
        setTimeout(()=>{
            setIndex(!index) 
        }, 8000)
        
    }
    return(
    <>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class={display} >
      <img src={stock} class="d-block w-100" alt="..." />
    </div>
    <div class={display1} >
      <img src={stockImg} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev"  onClick={()=>handleNext()}>
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next"  onClick={()=>handleNext()}>
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden" >Next</span>
  </button>
</div>
    </>
        )
}

export default Slider