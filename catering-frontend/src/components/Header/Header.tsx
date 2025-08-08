import React, { useState } from 'react';
import './Header.css';
import { InstagramIcon } from '../../assets/icons/InstagramIcon';
import { FacebookIcon } from '../../assets/icons/FacebookIcon';
import { LinkedInIcon } from '../../assets/icons/LinkedInIcon';
import headerLogo from '../../assets/Images/General/logo_main.png';

interface HeaderProps {
  transparent: boolean;
}

const navItems = [
  { label: 'Our Story', href: '#our-story' },
  { label: 'Our Products', href: '#our-products' },
  { label: 'Our Promises', href: '#our-promises' },
  { label: 'Contact Us', href: '#contact' },
];

const Header: React.FC<HeaderProps> = ({ transparent }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={`header ${transparent ? 'transparent' : ''}`}>      
      <div className="header__inner container">
        <div className="logo">
          <img src={headerLogo} alt="Norfolk catering logo" />
        </div>

        <nav className="nav--desktop">

          <ul>
            {navItems.map(item => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          <div className="social-icons">
            <a href="https://instagram.com/…"><InstagramIcon className="social-icon-svg"/></a>
            <a href="https://facebook.com/…"><FacebookIcon className="social-icon-svg"/></a>
            <a href="https://linkedin.com/…"><LinkedInIcon className="social-icon-svg"/></a>
          </div>

        </nav>

        <button
          className="mobile-menu-button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? '✖' : '☰'}
        </button>
      </div>

      {mobileOpen && (
        <div className="nav--mobile container">
          <ul>
            {navItems.map(item => (
              <li key={item.label} onClick={() => setMobileOpen(false)}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="social-icons">
            <a href="https://instagram.com/…"><InstagramIcon /></a>
            <a href="https://facebook.com/…"><FacebookIcon /></a>
            <a href="https://linkedin.com/…"><LinkedInIcon /></a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;