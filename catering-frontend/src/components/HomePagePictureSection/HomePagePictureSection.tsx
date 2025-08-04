import React from 'react';
import './HomePagePictureSection.css';

export interface HomePagePictureSectionProps {
  imageSrc: string;
  title: string;
  text: string;
  orientation?: 'left' | 'right';
}

const HomePagePictureSection: React.FC<HomePagePictureSectionProps> = ({
  imageSrc,
  title,
  text,
  orientation = 'left',
}) => {
  const containerClass = `picture-section ${orientation}`;

  return (
    <section className={containerClass}>
      <div className="image-container">
        <img src={imageSrc} alt={title} className="section-image" />
      </div>
      <div className="text-container">
        <h2 className="section-title">{title}</h2>
        <p className="section-text">{text}</p>
      </div>
    </section>
  );
};

export default HomePagePictureSection;