import React from 'react'
import Search from './search';

function Header() {
    return (
        <div className="header-Title"> 
            <div className='header-Container'>
                <div className='header-Container-left'>
                    <h1> Home </h1>
                </div>
                <Search />

                <div className='header-Container-Right'>
                    <h1> Contact Us </h1>
                    <h1> Login </h1>
                    <h1> Projects </h1>
                    <h1> Profile  </h1>
                </div>
            </div>
        </div>
    )
}
export default Header;