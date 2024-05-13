import React, { useState} from 'react';
import {Link} from 'react-scroll';
import './Navbar.css';
import {animateScroll as scroll} from 'react-scroll';

function Navbar() {
  const [click, setClick] = useState(false);
  // const [dropdown, setDropdown] = useState(false);
  const [navbar, setNavbar] = useState(false);
 // const [fix, setFix] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changeNavbar = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else{
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeNavbar);

  // const onMouseEnter = () => {
  //   if(window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(true);
  //   }
  // };

  // const onMouseLeave = () => {
  //   if(window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(false);
  //   }
  // };

  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className='navbar-container'>
          <div className='navbar-logo' onClick = {() =>
          scroll.scrollToTop()}>
          <img src="images/qwerty.jpg" alt='SSA logo' className='logo-image' />
             <h1 className='nav-h1'>UBC SSA</h1>
             </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to="home" smooth={true} duration={1000} className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to="about" offset={-80} smooth={true} duration={1000}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className='nav-item'
            // onMouseEnter={onMouseEnter}
            // onMouseLeave={onMouseLeave}
            >
              <Link
                to="events" offset={-80} smooth={true} duration={1000}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Events 
                {/* {' '} <i className='fas fa-caret-down' /> */}
              </Link>
              {/* {dropdown && <Dropdown />} */}
            </li>
            <li className='nav-item'>
              <Link
                to="team" offset={-80} smooth={true} duration={1000}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Team
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to="footer" offset={-80} smooth={true} duration={1000}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
