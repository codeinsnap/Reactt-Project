import React from 'react'
import Tab from '../Tabs/tabs';
import './home.css'
import Rectangle from '../../assests/Icons/Rectangle.jpg';

import shoes2 from '../../assests/Icons/shoes2.png'
import shoes3 from '../../assests/Icons/shoes3.png'
import shoes4 from '../../assests/Icons/shoes4.png'
import { Link } from 'react-router-dom';

function Home(){
    return(
      <div className='wrapper'>
        <div className='wrapper-container'>
          <div className='warpper-upper-section'> 
            <div className='wrapper-title'>
                <span> Shoe </span>
                <span className='second-title'> Brand </span>
            </div>
            <div className='wrapper-nav-bar'>
                <span> HOME </span>
                <span> SNEAKERS </span>
                <Link to = "/aboutus" ><span> About Us </span></Link>
            </div>
            <img src={Rectangle} className='image1'/>
          </div>
          <div className='wrapper-second-container'> 
              <span>Regain your</span>
              <span>confidence on the</span>
              <span>court</span>
              <span className='second-title'>A shoe bulit with purpose and to take your game to the next level.</span>
          </div>
        </div>

          <div className='wrapper-third-container'>

            <div className='third-container'>
                  <div className='textdiv'>
                    <span className='heading'>Lightweight</span>
                    <span>upper mesh material provides proper ventilation and reduction in the weight of the shoes.</span>
                  </div>
                    <img className='secondImg' src={shoes2} alt="shoes" />
            </div>

            <div className='wrapper-fourth-container'>
                
                <img className='smallImg' src={shoes3} alt="shoes" />
                  <div>
                    <span className='heading'>Flexibility</span>
                    <span>Soft, flexible soles will allow the walker to push off easily with each step</span>
                    </div>
            </div>

            <div className='wrapper-fifth-container'>
                    <div>
                    <span className='heading'>Durability</span>
                    <span>Lightweight, woven material is durable and provide structure and support</span>
                    </div>
                <img className='smallImg' src={shoes4} alt="shoes" />
            </div>
          </div>
      </div> 
    )
}

export default Home;