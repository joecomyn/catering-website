import React from 'react';
import './Footer.css';
import { LinkedInIcon } from '../../assets/icons/LinkedInIcon';
import { FacebookIcon } from '../../assets/icons/FacebookIcon';
import { InstagramIcon } from '../../assets/icons/InstagramIcon';
import SalsaIcon from '../../assets/Images/General/salsa-icon.png';
import scrollToId from '../../services/utils/scrollToId';

const navItems = [
    { label: 'Home', href: 'top' },
    { label: 'Our Story', href: 'our-story' },
    { label: 'Our Products', href: 'our-products' },
    { label: 'Our Services', href: 'our-services' },
    { label: 'Our Promises', href: 'our-promises' },
    { label: 'Contact Us', href: 'contact' },
];

const Footer: React.FC = () => {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-nav-section">
                    <div className="footer-nav">
                        <ul>
                            {navItems.map(item => (
                                <li key={item.label}>
                                    <a 
                                    href={item.href} 
                                    onClick={
                                        (e) => {
                                        e.preventDefault();
                                        scrollToId(item.href, 120);
                                        }
                                    }
                                    >
                                    {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-social">
                        <div className="social-links">
                                    <a 
                                    href="https://www.instagram.com/norfolkcatering/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    <InstagramIcon className="social-icon-svg"/>
                                    </a>
                                    <a 
                                    href="https://www.facebook.com/NorfolkCatering/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    <FacebookIcon className="social-icon-svg"/>
                                    </a>
                                    <a 
                                    href="https://uk.linkedin.com/company/norfolk-catering-limited"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    <LinkedInIcon className="social-icon-svg"/>
                                    </a>
                        </div>
                    </div>
                </div>
                <div className="footer-certification">
                    <div className="certification-placeholder">
                        <img src={SalsaIcon} alt="Certification By Salsa" />
                    </div>
                </div>
            </div>


            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Norfolk Catering 2025. All rights reserved.</p>
            </div>
        </footer>
    );
};


export default Footer;