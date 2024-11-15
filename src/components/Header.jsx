import Logo from './Logo';
import Navigation from './Navigation'
import LinkedIn from '../assets/iconmonstr-linkedin-3.svg';
import { useState } from 'react';
import '../styles/Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className='top-navbar'>
        <div className="ns-header">
          <Logo />
          <Navigation />
          <div className="full-width flex-row justify-end">
            <Link to="https://www.linkedin.com/company/netspeek/mycompany/" target="_blank">
              <img src={LinkedIn} />
            </Link>
          </div>
        </div>
      </div>
      <div className='side-navbar'>
        <Logo />
        <div className='side-toggle'>
          <Link to="https://www.linkedin.com/company/netspeek/mycompany/" target="_blank">
            <img src={LinkedIn} />
          </Link>
          <button className='toggle-btn' onClick={toggleNavbar}>{isOpen ? <CloseIcon /> : <MenuIcon />}</button>
        </div>
      </div>
      {isOpen && (
        <div className='mobile-navbar'>
          <div className="ns-header">
            <Navigation />
            <div className="full-width flex-row justify-end">
              <Link to="https://www.linkedin.com/company/netspeek/mycompany/" target="_blank">
                <img src={LinkedIn} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header;
