import React from 'react'
import { Link } from 'react-router-dom';
import Search from './search';
import "./header.css"

function Header() {
    return (
        <div className="header-Title"> 
            <div className='header-Container'>
                <div className='header-Container-left'>
                    <Link to='/'><button className="home-btn"> Home </button></Link>
                </div>
                <Search />

                <div className='header-Container-Right'>
                    <Link to='/AboutUs'><button className="home-btn"> About Us </button></Link>
                    <Link to='/login'><button className="home-btn"> Login </button></Link>
                </div>
            </div>
        </div>
    )
}
export default Header;