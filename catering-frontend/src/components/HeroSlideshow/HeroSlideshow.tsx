import React, { useState, useEffect, useRef } from 'react';
import './HeroSlideshow.css';
import slide1 from '../../assets/Images/HeroSlides/slide1.png'
import slide2 from '../../assets/Images/HeroSlides/slide2.jpg'
import slide3 from '../../assets/Images/HeroSlides/slide3.jpeg'
import { motion } from 'framer-motion'
import scrollToId from '../../services/utils/scrollToId';

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
    headline: 'Crate to plate, Fresh everyday. The Norfolk way',
    ctaLabel: 'Our Story',
    ctaLink: 'our-story',
  },
  {
    imageSrc: slide2,
    headline: 'Family-owned values, community-focused service',
    ctaLabel: 'Our Products',
    ctaLink: 'our-products',
  },
  {
    imageSrc: slide3,
    headline: 'Serving with care, from our family to yours',
    ctaLabel: 'Contact Us',
    ctaLink: 'contact',
  },
];

const swipeConfidenceThreshold = 500;
const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

interface HeroSlideshowProps {
  visible: boolean;
}


const HeroSlideshow: React.FC<HeroSlideshowProps> = ({ visible }) => {
    const [current, setCurrent] = useState(0);
    const slideInterval = 7000; // Default to 10 seconds
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

    const navigateSlide = ( slideIndex: number ) => {
        setCurrent(slideIndex);
        if (timerRef.current) {
            window.clearInterval(timerRef.current);
            timerRef.current = window.setInterval(incrementSlide, slideInterval);
        }
    };

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
                drag="x"
                dragElastic={0.2}
                onDragStart={() => {
                    if (timerRef.current) window.clearInterval(timerRef.current);
                }}
                onDragEnd={(_, info) => {
                    const swipe = swipePower(info.offset.x, info.velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                        navigateSlide((current + 1) % slides.length);
                    } else if (swipe > swipeConfidenceThreshold) {
                        navigateSlide((current - 1 + slides.length) % slides.length);
                    } else {
                        if (timerRef.current) window.clearInterval(timerRef.current);
                        timerRef.current = window.setInterval(incrementSlide, slideInterval);
                        setCurrent((c) => c);
                    }
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
                            {slide.subHeadline && <h4>{slide.subHeadline}</h4>}
                            {slide.ctaLabel && slide.ctaLink && (
                                <a href={slide.ctaLink} 
                                    className="cta-button"
                                    onClick={
                                        (e) => {
                                        e.preventDefault();
                                        scrollToId(slide.ctaLink!, 120);
                                        }
                                    }
                                >
                                    {slide.ctaLabel}
                                </a>
                            )}
                        </div>
                    </div>
                ))}

            </motion.div>
            <div className="controls">
                <button onClick={() => navigateSlide((current - 1 + slides.length) % slides.length)}>‹</button>
                <button onClick={() => navigateSlide((current + 1) % slides.length)}>›</button>
            </div>
            
            <div className="dots">
                {slides.map((_, idx) => (
                    <button
                    key={idx}
                    className={idx === current ? 'active' : ''}
                    onClick={() => navigateSlide(idx)}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlideshow;