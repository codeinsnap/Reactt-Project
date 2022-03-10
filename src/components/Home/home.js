import React from 'react'
import Tab from '../Tabs/tabs';
import './home.css'
import Rectange from '../../assests/Icons/Rectangle.jpg';

function Home(){
    return(
      <div className='wrapper'>
        <div className='wrapper-container'>
          <div className='warpper-upper-section'> 
            
            <section className='wrapper-title'>
                <span> Shoe </span>
                <span> Brand </span>
            </section>
            <section className='wrapper-nav-bar'>
                <span> HOME </span>
                <span> SNEAKERS </span>
                <span> PLAYERS </span>
            </section>
          </div>
          <div className='wrapper-second-container'> 
          <section className='second-container'>
          <span>Regain your</span>
          <span>confidence on the</span>
          <span>court</span>
          <span>A shoe bulit with purpose and to take your game to the next level.</span>
          <img className='secondImg' src="" alt="" />
          </section>
          </div>
        </div>
          <div className='wrapper-third-container'>
            <div className='third-container'>
                <section className='container'>
                    <span>Lightweight</span>
                    <span>upper mesh material provides proper ventilation and reduction in the weight of the shoes.</span>
                </section> 
                <img className='thirdImg' src="" alt="" />
            </div>
            <div className='wrapper-fourth-container'>
                <section className='fourt-container'>
                    <span>Flexibility</span>
                    <span>Soft, flexible soles will allow the walker to push off easily with each step</span>
                </section>
                <img className='fourthImg' src="" alt="" />
            </div>
            <div className='wrapper-fifth-container'>
                <section className='fifth-container'>
                    <span>Durability</span>
                    <span>Lightweight, woven material is durable and provide structure and support</span>
                </section>
                <img className='fifthImg' src="" alt="" />
            </div>
          </div>
      </div> 
    )
}

export default Home;