import { useState, useRef } from 'react';
import "./Navbar.css"

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  };
  return (
    <nav className='navbar'>
        <div className='navbar-container' ref={linksContainerRef} style={linkStyles} >
          <a className="HomeLink" href='/home'><p className='HomeTitle'>CVD Diagnosis</p></a>
          <ul className='rel' ref={linksRef}>
            <li key={2}>
              <a href='/about'>About</a>
            </li>
            <li key={3}>
              <a href='/model'>Model</a>
            </li>
            <li key={4}>
              <a href='/register'>Get Started</a>
            </li>
            <li key={5}>
              <a href='/logout'>Logout</a>
            </li>
          </ul>
        </div>
    </nav>
  );
};

export default Navbar;