import React from 'react';
import './HomePageServicesSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup, faTrain, faBuilding } from '@fortawesome/free-solid-svg-icons';

import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

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
      'Workplace Catering',
      'Independent Catering',
      'Vending',
      'Business Lunches',
    ],
  },
];

const HomePageServicesSection: React.FC = () => {
  return (
    <section className="services-section">
      <div className="services-inner">
        {services.map(svc => (
          <div className="service-card" key={svc.serviceName}>
            <div className="icon-circle">
              <FontAwesomeIcon icon={svc.icon} size="2x"/>
            </div>
            <div className="service-title">{svc.serviceName}</div>
            <ul className="sub-services-list">
              {svc.subServices.map(sub => (
                <li className="sub-service-item" key={sub}>
                  {sub}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePageServicesSection;