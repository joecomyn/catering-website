import React, { useState } from 'react';
import './Header.css';
import { FacebookIcon } from '../../assets/icons/FacebookIcon';
import { InstagramIcon } from '../../assets/icons/InstagramIcon';
import { LinkedInIcon } from '../../assets/icons/LinkedInIcon';

const navItems = [
  { label: 'Our Story', href: '#our-story' },
  { label: 'Our Products', href: '#our-products' },
  { label: 'Our Promises', href: '#our-promises' },
  { label: 'Contact Us', href: '#contact' },
];

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="header">
      <div className="header__inner">
        <div className="logo">Your Logo</div>
        <nav className="nav--desktop">
          <ul>
            {navItems.map(item => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="social-icons">
            <a href="https://instagram.com/…" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
            <a href="https://facebook.com/…" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
            <a href="https://linkedin.com/…" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
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
        <div className="nav--mobile">
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