import React from 'react';
import './CollapsibleHeader.css';
import { useMediaQuery } from 'react-responsive';

const MobileHeader: React.FC = () => {

    return (
        <div
            className='header mobileHeader'
            style={{backgroundColor: 'red'}}
        >
            <p>mobile</p>
        </div>
    );
};

const DesktopHeader: React.FC = () => {

    return (
        <div
            className='header desktopHeader'
            style={{backgroundColor: 'blue'}}
        >
            <p>desktop</p>
        </div>
    );
};

const CollapsibleHeader: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <header
    className={`header ${isMobile ? 'mobileHeader' : 'desktopHeader'}`}>
        {isMobile ? <MobileHeader/> : <DesktopHeader/>}
    </header>
  );
};

export default CollapsibleHeader;
