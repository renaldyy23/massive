/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { ShopContext } from '../components/shopcontext'
import { VscAccount } from 'react-icons/vsc'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { NavLink , useLocation} from 'react-router-dom';
import logo from '../assets/images/jf.png'



const header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { getTotalCartProducts, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const totalProducts = getTotalCartProducts();
  const location = useLocation();
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return <>
  
  <header className='navbar-middle sticky-top p-2 p-md-2 p-lg-2'>
  <div className="container-xxl">
    <div className="row align-items-center m-0">
      <div className="col-md-2 d-flex justify-content-center">

      <button className="navbar-toggler d-md-none " type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon">{showMenu ? <AiOutlineClose /> : <AiOutlineMenu /> }
          </span>
        </button>

        <Link to='/'>
          <img src={logo} alt="logo" className='img-fluid logo' />
        </Link>

        <button className='cart-span-2 fs-3 d-md-none'>
        <Link to='login' className={location.pathname === '/login' ? 'active' : 'not-active'}>
          <VscAccount />
          </Link>
        </button>
      </div>

      <div className="col-md-10 row col-lg-10">
        <div className="col-md-3 m-auto">
        <div className="input-group d-none d-md-flex">
          <input type="text" className="form-control" placeholder="Cari..." aria-label="Cari..." aria-describedby="basic-addon2"/>
          <button className="input-group-text" id="basic-addon2">Cari</button>
        </div>
        </div>
        <div className="col-md-6 m-auto">
        <div className='menu-links mt-1 d-none d-md-flex d-lg-flex'>
          <div className='ms-auto gap-3'><NavLink to="/" className={location.pathname === '/' ? 'active' : 'not-active'} onClick={toggleMenu}>Beranda</NavLink></div>
          <div className='ms-auto gap-3'><NavLink to="/shop" className={location.pathname === '/shop' ? 'active' : 'not-active'} onClick={toggleMenu}>Franchise</NavLink></div>
          <div className='ms-auto gap-3'><NavLink to="/blog" className={location.pathname === '/blog' ? 'active' : 'not-active'} onClick={toggleMenu}>Blog</NavLink></div>
          <div className='ms-auto gap-3'><NavLink to="/about" className={location.pathname === '/about' ? 'active' : 'not-active'} onClick={toggleMenu}>Tentang Kami</NavLink></div>
          <div className='ms-auto gap-3'><NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : 'not-active'} onClick={toggleMenu}>KONTAK</NavLink></div>
        </div>
        </div>
        <div className="col-md-3">
        <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-1 d-none d-md-flex d-lg-flex m-auto">
              <div className={location.pathname === 'login' ? 'active' : 'not-active'}>
                <Link onClick={toggleMenu}
                  to="/login" className="d-flex align-items-center color-nav me-3">
                  <VscAccount className='me-1 fs-2'/>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      {showMenu && (
        <div className="col-md-10 d-md-none mt-3">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Cari..." aria-label="Cari..." aria-describedby="basic-addon2" />
            <button className="input-group-text" id="basic-addon2"><Link to='/shop'>Cari </Link></button>
          </div>
          <div className='menu-links mt-2'>
            <div className='mb-2'><NavLink className={location.pathname === '/' ? 'active' : 'not-active'} to="/" onClick={toggleMenu}>Beranda</NavLink></div>
            <div className='mb-2'><NavLink className={location.pathname === '/shop' ? 'active' : 'not-active'} to="/shop" onClick={toggleMenu}>Franchise</NavLink></div>
            <div className='mb-2'><NavLink className={location.pathname === '/blog' ? 'active' : 'not-active'} to="/blog" onClick={toggleMenu}>Blog</NavLink></div>
            <div className='mb-2'><NavLink className={location.pathname === '/about' ? 'active' : 'not-active'} to="/about" onClick={toggleMenu}>Tentang Kami</NavLink></div>
            <div className='mb-2'><NavLink className={location.pathname === '/contact' ? 'active' : 'not-active'} to="/contact" onClick={toggleMenu}>KONTAK</NavLink></div>
          </div>
      </div>

      )}
    </div>
  </div>
</header>
  </>;
};

export default header