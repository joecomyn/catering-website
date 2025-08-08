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
  return (
    <section className={`picture-section ${orientation}`}>
      <div className="picture-container">
        <div className={`green-bg ${orientation}`} />
        <div className={`image-wrapper ${orientation}`}>
          <div className={`image-inner ${orientation}`}>
            <img src={imageSrc} alt={title} className="section-image" />
          </div>
        </div>
      </div>
      <div className="text-wrapper">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
};

export default HomePagePictureSection;