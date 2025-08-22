import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = ({ resume }) => {
  const [typedText, setTypedText] = useState('');
  const fullText = resume.headline;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      
      <Container className="position-relative">
        <Row className="min-vh-100 align-items-center justify-content-center text-center">
          <Col lg={10} xl={8}>
            <div className="hero-content">
              <div className="hero-avatar mb-4">
                <img 
                  src="/Image/Murphy.jpg" 
                  alt="Emeka Onu Professional Headshot"
                  className="rounded-circle hero-profile-img"
                />
              </div>
              
              <div className="mb-3">
                <span className="badge bg-primary bg-opacity-20 text-primary px-4 py-2 rounded-pill">
                  👋 Welcome to my portfolio
                </span>
              </div>
              
              <h1 className="display-2 fw-bold text-white mb-3">
                {resume.name}
              </h1>
              
              <div className="mb-4" style={{minHeight: '80px'}}>
                <p className="lead text-white fs-3 mb-0">
                  {typedText}
                  <span className="text-primary">|</span>
                </p>
              </div>
              
              <div className="mb-4">
                <span className="badge glass-card text-white px-4 py-2 fs-6">
                  <span className="me-2">📍</span>
                  {resume.location}
                </span>
              </div>
              
              <div className="hero-achievements mb-5">
                <Row className="g-3 justify-content-center">
                  {resume.achievements.map((achievement, index) => (
                    <Col xs={6} md={3} key={index}>
                      <div className="achievement-card text-center p-3 h-100">
                        <div className="achievement-icon mb-2 fs-2">
                          {index === 0 && '🏢'}
                          {index === 1 && '💰'}
                          {index === 2 && '📈'}
                          {index === 3 && '🎯'}
                        </div>
                        <p className="text-white mb-0 small fw-semibold">
                          {achievement}
                        </p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
              
              <div className="hero-cta">
                <Button 
                  variant="primary" 
                  size="lg" 
                  href="#contact"
                  className="btn-modern me-3 px-5"
                >
                  <span className="me-2">💼</span>
                  Get In Touch
                </Button>
                <Button 
                  variant="outline-light" 
                  size="lg" 
                  href="#about"
                  className="btn-glass px-5"
                >
                  <span className="me-2">📖</span>
                  Learn More
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
      <div className="position-absolute bottom-0 start-50 translate-middle-x pb-4">
        <div className="text-center">
          <div className="text-white-50 small mb-2">Scroll to explore</div>
          <div className="scroll-indicator">
            <div className="bg-primary rounded-pill mx-auto" 
                 style={{width: '2px', height: '30px', animation: 'float 2s ease-in-out infinite'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;