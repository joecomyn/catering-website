import React, { useCallback, useEffect, useState } from 'react';
import './HomePageServicesSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup, faTrain, faBuilding, faChampagneGlasses, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import useEmblaCarousel from 'embla-carousel-react';

export interface ServiceItem {
  icon: IconDefinition;
  serviceName: string;
  subServices: string[];
}

const services: ServiceItem[] = [
  {
    icon: faPeopleGroup,
    serviceName: 'PUBLIC & EDUCATION',
    subServices: [
      'Higher Education Catering',
      'NHS Catering',
      'Private Hospital Catering',
      'School Catering',
    ],
  },
  {
    icon: faTrain,
    serviceName: 'TRAVEL & LEISURE',
    subServices: [
      'Airline Catering',
      'Rail and Ferry Catering',
      'Premium Coffee Shops',
      'Festival and Event Catering',
    ],
  },
  {
    icon: faBuilding,
    serviceName: 'BUSINESS & INDUSTRY',
    subServices: [
      'Contract Catering',
      'Workplace Catering/ Business Lunches',
      'Independent Catering',
      'Vending',
    ],
  },
  {
    icon: faChampagneGlasses,
    serviceName: 'PRIVATE CATERING',
    subServices: [
      'Private Functions',
      'Occasions and Celebrations',
      'Events',
      'Parties',
    ],
  },
];

function useIsMobile(query = '(max-width: 800px)') {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e: MediaQueryListEvent | MediaQueryList) => setIsMobile(('matches' in e ? e.matches : (e as MediaQueryList).matches));
    onChange(mql);
  }, [query]);
  return isMobile;
}

const HomePageServicesSection: React.FC = () => {
   const isMobile = useIsMobile();

  if (!isMobile) {
    return (
      <section className="services-section">
        <div className="services-inner">
          {services.map(svc => (
            <div className="service-card" key={svc.serviceName}>
              <div className="icon-circle">
                <FontAwesomeIcon icon={svc.icon} size="2x" />
              </div>
              <div className="service-title">{svc.serviceName}</div>
              <ul className="sub-services-list">
                {svc.subServices.map(sub => <li className="sub-service-item" key={sub}>{sub}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return <ServicesCarouselMobile />;
};

export default HomePageServicesSection;

const ServicesCarouselMobile: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'center', dragFree: false });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback((api: typeof emblaApi) => {
    if (!api) return;
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi); // run once at init
    emblaApi.on('select', () => onSelect(emblaApi));
    emblaApi.on('reInit', () => onSelect(emblaApi));
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="services-section mobile">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {services.map(svc => (
            <div className="embla__slide" key={svc.serviceName}>
              <div className="service-card">
                <div className="icon-circle">
                  <FontAwesomeIcon icon={svc.icon} size="2x" />
                </div>
                <div className="service-title">{svc.serviceName}</div>
                <ul className="sub-services-list">
                  {svc.subServices.map(sub => <li className="sub-service-item" key={sub}>{sub}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {canPrev && (
        <button className="embla__prev" onClick={scrollPrev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      )}
      {canNext && (
        <button className="embla__next" onClick={scrollNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      )}
    </section>
  );
};