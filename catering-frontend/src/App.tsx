import React from 'react';
import './App.css';
import Header from './components/Header/Header';

const App: React.FC = () => {

  return (
    <div className="app">
      <Header />
      <div className="container">
        <section className="hero">
          <h1>Welcome to Our Site</h1>
          <p>We're glad you're here. Start building your dream project with us.</p>
          <button className="cta-button">Get Started</button>
        </section>

        <section id="features" className="features">
          <div className="feature">
            <h2>Feature One</h2>
            <p>Description of feature one.</p>
          </div>
          <div className="feature">
            <h2>Feature Two</h2>
            <p>Description of feature two.</p>
          </div>
          <div className="feature">
            <h2>Feature Three</h2>
            <p>Description of feature three.</p>
          </div>
        </section>

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App
