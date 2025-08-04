// src/App.tsx
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import HeroSlideshow from './components/HeroSlideshow/HeroSlideshow';
import avocados from './assets/Images/BannerImages/avocados.jpeg';
import ourStoryPic from './assets/Images/General/our-story-homepage-pic.jpeg';
import ourProductsPic from './assets/Images/General/our-products-homepage-pic.jpeg';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import HomePagePictureSection from './components/HomePagePictureSection/HomePagePictureSection';
import HomePageServicesSection from './components/HomePageServicesSection/HomePageServicesSection';

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
        <ParallaxBannerLayer image={avocados} speed={-10} className='parallax-banner-image'/>
        <ParallaxBannerLayer className='parallax-banner-content'>
          <h1 className='parallax-text'>Our Services</h1>
            <HomePageServicesSection />
        </ParallaxBannerLayer>
      </ParallaxBanner>

      <div className="container">
        <section id="our-promises" className="section">
          <h2>Our Promises</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet, nisl nec commodo pulvinar, lectus tellus pretium leo, sit amet gravida neque dui eget orci. Quisque bibendum nunc sapien, vel sollicitudin neque dapibus a. Nulla posuere felis at ligula rhoncus, ut faucibus tellus tristique. Donec sit amet ultricies lectus. Donec mauris metus, lobortis et purus quis, dignissim cursus lorem. Sed convallis bibendum ligula at elementum. Cras a ex in ex porttitor ornare ut eu ipsum.

            Etiam vulputate, lorem ac tristique porta, odio odio fermentum magna, id consequat ex augue vitae turpis. Nullam eu mauris dictum, tempus urna suscipit, congue velit. Quisque libero sapien, finibus ac cursus sed, condimentum et purus. Quisque vel erat sed dui fermentum pulvinar. In dictum massa diam, id interdum eros suscipit ac. Vestibulum neque justo, rhoncus quis tempor vel, luctus nec massa. Mauris ligula sem, consectetur sit amet ligula ut, vehicula venenatis sem. Morbi a nulla pretium, consectetur nulla pulvinar, feugiat neque. Aliquam placerat, velit ut suscipit posuere, nulla turpis pellentesque turpis, quis egestas massa lacus nec tellus. Quisque augue mauris, elementum lobortis bibendum eu, commodo vitae augue. Aenean maximus magna quis risus luctus, eget vestibulum nisl feugiat.

            Vivamus vitae sagittis elit, a aliquet leo. Nam sit amet eros eu libero sodales egestas ac eget sapien. Suspendisse potenti. Aliquam eu lacus a magna facilisis commodo. Donec aliquam scelerisque varius. Sed facilisis arcu tortor, vestibulum interdum nibh egestas id. Morbi dolor lectus, ornare eget ullamcorper eu, posuere in nunc. Proin felis velit, ultricies sed vestibulum quis, dictum sed massa. Morbi sit amet ipsum at massa bibendum fermentum. Curabitur sed urna eu mi finibus blandit.

            Phasellus pretium justo vel sollicitudin imperdiet. Donec fermentum viverra dolor quis cursus. Sed a sodales sapien. Morbi odio lorem, luctus quis bibendum id, porta quis ante. Nullam ullamcorper, augue et lobortis consequat, elit orci tristique arcu, sagittis accumsan ex ante eget est. Quisque vitae orci nec libero sodales rhoncus in quis ex. Sed dapibus pharetra nunc, non sagittis diam tristique non. Sed ullamcorper elementum diam, non varius odio mollis ultrices. Morbi ut vestibulum nisl. Nullam pharetra aliquet ex ac vulputate. Nunc pulvinar pellentesque auctor. Phasellus fermentum ex sed arcu molestie, eget sodales ex elementum.

            Fusce egestas dolor enim, ac mattis tellus egestas at. Curabitur vitae odio quis eros venenatis commodo nec vitae sem. Duis aliquet, libero nec feugiat mattis, odio est pretium libero, eget laoreet ante justo quis felis. Vestibulum a leo nec nisi sollicitudin sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In ultrices pharetra leo at pharetra. Suspendisse lorem ex, convallis nec molestie eu, aliquet ac nunc. Aliquam vel blandit purus. Mauris malesuada vestibulum dolor, non pretium neque sodales nec. Duis arcu mauris, ultrices id commodo posuere, semper eget nisi. Sed ut elementum sem. Praesent placerat porta posuere. Duis in ultrices lorem, ac tincidunt ante. 
          </p>
        </section>

        <section id="contact" className="section">
          <h2>Contact Us</h2>
          <p>...</p>
        </section>
      </div>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Norfolk Catering. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
