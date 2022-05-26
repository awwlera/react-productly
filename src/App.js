import React from 'react';
import './App.scss';
import logo from './assets/img/logo.svg';
import BurgerMenu from "./components/BurgerMenu";


function App() {
  return (
    <Header/>
  );
}

function Header () {
  React.useEffect(() => {
    const menuWrap = document.querySelector(".bm-menu-wrap");
    if (menuWrap) {
      menuWrap.setAttribute("aria-hidden", true);
    }
  }, []);

  return (
    <header className='header'>
      <div className='container'>
        <div className='logo-holder'>
          <a href="www.somepage.com" className="logo-link">
            <img src={logo} alt="logo" className="logo-img" />
          </a>
        </div>
        <BurgerMenu /> 
        <div className="nav-holder">
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#product" className="nav-link">Product</a>
              </li>
              <li className="nav-item">
                <a href="#customers" className="nav-link">Customers</a>
              </li>
              <li className="nav-item">
                <a href="#pricing" className="nav-link">Pricing</a>
              </li>
              <li className="nav-item">
                <a href="#resources" className="nav-link">Resources</a>
              </li>
            </ul>
          </nav>
          <div className="btn-holder">
            <a href="/" className="btn">Sign in</a>
            <a href="/" className="btn">Sign up</a>
          </div>
        </div>
      </div>
    </header>
  );
}


export default App;
