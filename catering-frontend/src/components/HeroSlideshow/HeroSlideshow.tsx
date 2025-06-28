import React, { useState, useEffect, useRef } from 'react';
import './HeroSlideshow.css';
import slide1 from '../../assets/Images/HeroSlides/slide1.png'
import slide2 from '../../assets/Images/HeroSlides/slide2.jpg'
import slide3 from '../../assets/Images/HeroSlides/slide3.jpg'
import { motion } from 'framer-motion'

export interface Slide {
  imageSrc: string;
  headline: string;
  subHeadline?: string;
  ctaLabel?: string;
  ctaLink?: string;
}

const slides: Slide[] = [
  {
    imageSrc: slide1,
    headline: 'Crate to plate, Fresh everyday.',
    subHeadline: 'The Norfolk way',
    ctaLabel: 'Our Story',
    ctaLink: '#our-story',
  },
  {
    imageSrc: slide2,
    headline: 'Family-owned tradition',
    subHeadline: 'Quality you can taste',
    ctaLabel: 'Our Products',
    ctaLink: '#our-products',
  },
  {
    imageSrc: slide3,
    headline: 'Serving with care',
    subHeadline: 'From our kitchen to yours',
    ctaLabel: 'Contact Us',
    ctaLink: '#contact',
  },
];

interface HeroSlideshowProps {
  visible: boolean;
}


const HeroSlideshow: React.FC<HeroSlideshowProps> = ({ visible }) => {
    const [current, setCurrent] = useState(0);
    const slideInterval = 10000; // Default to 10 seconds
    const timerRef = useRef<number>(0);

    const incrementSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length)
    };

    useEffect(() => {
        timerRef.current = window.setInterval(incrementSlide, slideInterval);
        return () => {
            if (timerRef.current) window.clearInterval(timerRef.current);
        }
    }, [visible]);

    return (
        <div className="hero-slideshow">
            <motion.div
                style={{
                display: 'flex',
                width: `${slides.length * 100}%`,
                }}
                animate={{
                x: `-${(current * 100) / slides.length}%`,
                }}
                transition={{
                x: {
                    type: 'tween',
                    ease: 'easeInOut', 
                    duration: 1.2,
                },
                }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="slide"
                        style={{ backgroundImage: `url(${slide.imageSrc})` }}
                    >
                        <div className="overlay" />
                        <div className="content">
                            <h1>{slide.headline}</h1>
                            {slide.subHeadline && <p>{slide.subHeadline}</p>}
                            {slide.ctaLabel && slide.ctaLink && (
                                <a href={slide.ctaLink} className="cta-button">
                                    {slide.ctaLabel}
                                </a>
                            )}
                        </div>
                    </div>
                ))}

            </motion.div>
            <div className="controls">
                <button onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}>‹</button>
                <button onClick={() => setCurrent((current + 1) % slides.length)}>›</button>
            </div>
            
            <div className="dots">
                {slides.map((_, idx) => (
                    <button
                    key={idx}
                    className={idx === current ? 'active' : ''}
                    onClick={() => setCurrent(idx)}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlideshow;