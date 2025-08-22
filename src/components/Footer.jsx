import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = ({ resume }) => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h5 className="fw-bold mb-1">{resume.name}</h5>
            <p className="text-muted mb-0 small">
              Telecom Engineer | Network Infrastructure Specialist
            </p>
          </Col>
          
          <Col md={6} className="text-md-end">
            <p className="text-muted mb-0 small">
              &copy; {new Date().getFullYear()} {resume.name}. All rights reserved.
            </p>
            <div className="mt-2">
              <a href={`mailto:${resume.email}`} className="text-muted me-3 small text-decoration-none">
                Email
              </a>
              <a href={`tel:${resume.phone}`} className="text-muted me-3 small text-decoration-none">
                Phone
              </a>
              <a href="#" className="text-muted small text-decoration-none">
                LinkedIn
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;