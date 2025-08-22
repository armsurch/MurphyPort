import React from 'react';
import { Container, Row, Col, Card, Badge, Accordion } from 'react-bootstrap';

const Experience = ({ resume }) => {
  const getCompanyIcon = (company) => {
    if (company.includes('GIANTBASE')) return '🏢';
    if (company.includes('LEXTECH')) return '⚡';
    if (company.includes('WIRELESS')) return '📡';
    if (company.includes('5M')) return '🔧';
    if (company.includes('VDT')) return '📞';
    return '🏭';
  };

  const getStatusBadge = (dates) => {
    if (dates.includes('Present') || dates.includes('PRESENT')) {
      return <Badge bg="success" className="ms-2">Current</Badge>;
    }
    return <Badge bg="secondary" className="ms-2">Previous</Badge>;
  };

  return (
    <section id="experience" className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <div className="mb-3">
              <span className="badge bg-primary bg-opacity-20 text-primary px-4 py-2 rounded-pill">
                <span className="me-2">💼</span>
                Experience
              </span>
            </div>
            <h2 className="display-4 fw-bold mb-4 section-title">Professional Journey</h2>
            <p className="lead text-muted">
              A comprehensive timeline of telecommunications excellence and leadership growth
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="timeline-container">
              {resume.experience.map((job, index) => (
                <div key={index} className="timeline-item mb-4">
                  <Card className="modern-card border-0 shadow-sm position-relative">
                    <div className="position-absolute top-0 start-0 w-100 h-2 bg-gradient" 
                         style={{background: `linear-gradient(90deg, var(--bs-primary), var(--bs-info))`}}></div>
                    
                    <Card.Body className="p-4">
                      <Row className="align-items-center">
                        <Col md={8}>
                          <div className="d-flex align-items-center mb-3">
                            <div className="contact-icon me-3" style={{width: '50px', height: '50px'}}>
                              {getCompanyIcon(job.company)}
                            </div>
                            <div>
                              <div className="d-flex align-items-center">
                                <Badge bg="primary" className="mb-2">{job.dates}</Badge>
                                {getStatusBadge(job.dates)}
                              </div>
                              <Card.Title className="h4 fw-bold text-primary mb-1">
                                {job.title}
                              </Card.Title>
                              <Card.Subtitle className="h5 text-muted mb-0">
                                {job.company}
                              </Card.Subtitle>
                            </div>
                          </div>
                        </Col>
                        <Col md={4} className="text-md-end">
                          <div className="experience-metrics">
                            <div className="small text-muted">Achievements</div>
                            <div className="fw-bold text-primary">{job.description.length} Key Results</div>
                          </div>
                        </Col>
                      </Row>
                      
                      <Accordion className="mt-3">
                        <Accordion.Item eventKey={index.toString()} className="border-0">
                          <Accordion.Header className="bg-transparent border-0">
                            <span className="fw-semibold">
                              <span className="me-2">📋</span>
                              View Key Achievements & Responsibilities
                            </span>
                          </Accordion.Header>
                          <Accordion.Body className="pt-3">
                            <Row>
                              {job.description.map((desc, idx) => (
                                <Col md={6} key={idx} className="mb-3">
                                  <div className="d-flex align-items-start">
                                    <div className="me-3 mt-1">
                                      <div className="bg-success rounded-circle" 
                                           style={{width: '8px', height: '8px'}}></div>
                                    </div>
                                    <p className="mb-0 small">{desc}</p>
                                  </div>
                                </Col>
                              ))}
                            </Row>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>

            {/* Career Highlights */}
            <Card className="modern-card border-0 mt-5">
              <Card.Body className="p-4 text-center">
                <h4 className="fw-bold mb-4">
                  <span className="me-2">🏆</span>
                  Career Highlights
                </h4>
                <Row className="g-4">
                  <Col md={3} xs={6}>
                    <div className="highlight-item">
                      <div className="display-6 mb-2">🚀</div>
                      <div className="fw-bold text-primary">CEO & Founder</div>
                      <div className="small text-muted">GIANTBASE TELECOM</div>
                    </div>
                  </Col>
                  <Col md={3} xs={6}>
                    <div className="highlight-item">
                      <div className="display-6 mb-2">📈</div>
                      <div className="fw-bold text-success">40% Growth</div>
                      <div className="small text-muted">Client Increase</div>
                    </div>
                  </Col>
                  <Col md={3} xs={6}>
                    <div className="highlight-item">
                      <div className="display-6 mb-2">🔧</div>
                      <div className="fw-bold text-warning">300+ Installs</div>
                      <div className="small text-muted">Microwave Radio</div>
                    </div>
                  </Col>
                  <Col md={3} xs={6}>
                    <div className="highlight-item">
                      <div className="display-6 mb-2">👥</div>
                      <div className="fw-bold text-info">Team Leader</div>
                      <div className="small text-muted">Multiple Branches</div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;