import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }

  return (
		<header>
			<nav className="navbar">
				<div className="logo">
					<Link to="/">
						<img src={Logo} alt="" />
					</Link>
					<span>
						무지개 <br /> piano
					</span>
				</div>
				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/pricing" className="nav-link">
							Pricing
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/faq" className="nav-link">
							FAQ
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/contact" className="nav-link">
							Contact
						</Link>
					</li>
				</ul>
				<div className="hamburger" onClick={handleClick}>
					{click ? <FaTimes /> : <FaBars />}
				</div>
			</nav>
		</header>
  );
};

export default Navbar;
