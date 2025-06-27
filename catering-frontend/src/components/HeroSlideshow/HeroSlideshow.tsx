import React, { useState, useEffect, useRef } from 'react';
import './HeroSlideshow.css';

export interface Slide {
  imageSrc: string;
  headline: string;
  subHeadline?: string;
  ctaLabel?: string;
  ctaLink?: string;
}

interface HeroSlideshowProps {
  slides: Slide[];
  visible: boolean;
}

const HeroSlideshow: React.FC<HeroSlideshowProps> = ({ slides, visible }) => {
    const [current, setCurrent] = useState(0);
    const slideInterval = useRef<number>(3000); // Default to 3 seconds

    useEffect(() => {
        if (visible) {
        slideInterval.current = window.setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        }
        return () => {
        if (slideInterval.current) clearInterval(slideInterval.current);
        };
    }, [visible, slides.length]);

    if (!visible) return null;

    const { imageSrc, headline, subHeadline, ctaLabel, ctaLink } = slides[current];

    return (
        <div className="hero-slideshow">
        <div className="slide" style={{ backgroundImage: `url(${imageSrc})` }}>
            <div className="overlay" />
            <div className="content">
            <h1>{headline}</h1>
            {subHeadline && <p>{subHeadline}</p>}
            {ctaLabel && ctaLink && (
                <a href={ctaLink} className="cta-button">
                {ctaLabel}
                </a>
            )}
            </div>
        </div>
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