import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';

const Navigation = ({ resume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);

  // Use resume to populate brand; fallbacks keep nav stable if resume is missing
  const displayName = resume?.name || 'Emeka Onu';
  const shortTitle = resume?.headline ? (resume.headline.split(' WITH ')[0]) : 'Telecom Engineer';
  const firstName = displayName.split(' ')[0];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home', icon: '🏠' },
    { href: '#about', label: 'About', icon: '👨‍💼' },
    { href: '#experience', label: 'Experience', icon: '💼' },
    { href: '#services', label: 'Services', icon: '⚙️' },
    { href: '#gallery', label: 'Gallery', icon: '🖼️' },
    { href: '#contact', label: 'Contact', icon: '📞' }
  ];

  return (
    <>
      <Navbar 
        expand="lg" 
        fixed="top"
        className={`modern-navbar glass-navbar ${scrolled ? 'navbar-scrolled' : ''}`}
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <div className="me-2">
              <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" 
                   style={{width: '40px', height: '40px'}}>
                <span className="text-white fw-bold">E</span>
              </div>
            </div>
            <div className="d-none d-sm-block">
              <div className="fw-bold">{displayName}</div>
              <div className="small text-muted">{shortTitle}</div>
            </div>
            <div className="d-sm-none">
              <div className="fw-bold">{firstName}</div>
            </div>
          </Navbar.Brand>
          
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav"
            onClick={handleShow}
            className="border-0"
          />
          
          <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-block">
            <Nav className="ms-auto">
              {navItems.map((item, index) => (
                <Nav.Link 
                  key={index}
                  href={item.href} 
                  className="px-3 mx-1 text-white-50"
                >
                  <span className="me-2">{item.icon}</span>
                  {item.label}
                </Nav.Link>
              ))}
            </Nav>
            
            <div className="ms-3">
              <a 
                href="#contact" 
                className="btn btn-primary btn-modern px-4"
              >
                Hire Me
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Mobile Offcanvas Menu */}
      <Offcanvas show={show} onHide={handleClose} placement="end" className="glass-card">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="d-flex align-items-center">
              <div className="me-2">
                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" 
                     style={{width: '30px', height: '30px'}}>
                  <span className="text-white fw-bold small">E</span>
                </div>
              </div>
              <span>Menu</span>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {navItems.map((item, index) => (
              <Nav.Link 
                key={index}
                href={item.href} 
                className="py-3 px-3 rounded mb-2 text-dark"
                onClick={handleClose}
              >
                <span className="me-3 fs-5">{item.icon}</span>
                <span className="fw-semibold">{item.label}</span>
              </Nav.Link>
            ))}
          </Nav>
          
          <div className="mt-4">
            <a 
              href="#contact" 
              className="btn btn-primary btn-modern w-100"
              onClick={handleClose}
            >
              <span className="me-2">💼</span>
              Hire Me
            </a>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navigation;