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
              <a className='menu__links' href='#'>Головна</a>
              <a className='menu__links' href='#'>Збереженне</a>
              <a className='menu__links' href='#'>Про нас</a>
              <a className='menu__links' href='#'>Зв'язатися з нами</a>
          </div>

        </nav>
      </header>
    )
}

export default Header;