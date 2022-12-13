import React from "react";
import logoImage from '../../Image/pngegg.png';
import './header.css';

function Header(){
    return(
        <header className="header">
        <nav>
          <div className='header__logo'>
          <img width={"65px"} height={"65px"} src={logoImage} alt="Картинки нема"/>
            <h2>
              Domus Serpentium
            </h2>
          </div>

          <div className='header__menu'>
              <a className='menu__links' href='/main'>Головна</a>
              <a className='menu__links' href='/selected'>Збереженне</a>
              <a className='menu__links' href='/about'>Про нас</a>
          </div>

          <img width={"65px"} height={"65px"} src={logoImage} alt="Картинки нема"/>

        </nav>
      </header>
    )
}

export default Header;