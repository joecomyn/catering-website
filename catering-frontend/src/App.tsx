// src/App.tsx
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import HeroSlideshow from './components/HeroSlideshow/HeroSlideshow';
import services from './assets/Images/BannerImages/services.jpg';
import ourStoryPic from './assets/Images/General/our-story-homepage-pic.jpeg';
import ourProductsPic from './assets/Images/General/our-products-homepage-pic.jpeg';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import HomePagePictureSection from './components/HomePagePictureSection/HomePagePictureSection';
import HomePageServicesSection from './components/HomePageServicesSection/HomePageServicesSection';
import HomePagePolicyGrid from './components/HomePagePoliciesSection/HomePagePolicyGrid';
import ContactForm from './components/ContactForm/ContactForm';

const App: React.FC = () => {
  const [hasScrolled, setHasScrolled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY < window.screenTop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Header transparent={hasScrolled} />
      <HeroSlideshow visible={hasScrolled} />

      <div className="container">
        {/* Main content sections */}
        <section id="our-story" className="section">
          <HomePagePictureSection
            imageSrc={ourStoryPic}
            title="Our Norfolk Roots & Family Legacy"
            text="A Warm Welcome to Norfolk Catering. We’re a family-run, Locally Sourced, FRESH-CUT sandwich maker and supplier based out of the Fine City of Norwich.  We’ve earned a reputation as a premier supplier of Food-to-Go and Party/Event Catering services and solutions throughout East Anglia.  With over 30 years of experience creating and delivering the most delicious sandwiches & Food platters around, our products can be found at leading retail outlets, offices, factories, corporate and social events or wherever and whenever people come together in meetings and celebrations around East Anglia."
            orientation="left"
          />
        </section>

        <section id="our-products" className="section">
          <HomePagePictureSection
            imageSrc={ourProductsPic}
            title="No one can dispute that a sandwich is as good as its ingredients"
            text="We are constantly sourcing the very finest produce that our bountiful county and country have to offer. From our delicious flavoursome Norfolk Hams and the comforting goodness of our freshly baked bread crusty bread and rolls from our neighbour in Norwich to the wonderfully mouth-watering and aromatic Cheddars straight from Somerset to our kitchens, sourcing the very best ingredients is how we make our food taste great. All of our food is carefully handmade in our kitchens in Norwich under the same roof as our client services. Being all together in such close proximity means that we have been able to offer unparalleled customer service for over 30 years."
            orientation="right"
          />
        </section>
      </div>

      {/* Parallax Banner Component */}
      <ParallaxBanner className='parallax-banner'>
        <ParallaxBannerLayer image={services} speed={-10} className='parallax-banner-image'/>
        <ParallaxBannerLayer className='parallax-banner-content'>
          <h1 className='parallax-text'>Our Services</h1>
            <HomePageServicesSection />
        </ParallaxBannerLayer>
      </ParallaxBanner>

      <div className="container">
        <section id="our-promises" className="section">
          <HomePagePolicyGrid />
        </section>

        <section id="contact" className="section">
          <ContactForm/>
        </section>
      </div>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Norfolk Catering. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
