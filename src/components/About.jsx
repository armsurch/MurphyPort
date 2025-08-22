import React from 'react';
import { Container, Row, Col, Badge, Card, ProgressBar } from 'react-bootstrap';

const About = ({ resume }) => {
  const skillLevels = [
    { skill: "Network Configuration", level: 95 },
    { skill: "Electrical Systems", level: 90 },
    { skill: "Project Management", level: 88 },
    { skill: "Technical Support", level: 92 },
    { skill: "System Installation", level: 94 },
    { skill: "Team Leadership", level: 85 }
  ];

  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <div className="mb-3">
              <span className="badge bg-primary bg-opacity-20 text-primary px-4 py-2 rounded-pill">
                <span className="me-2">👨‍💼</span>
                About Me
              </span>
            </div>
            <h2 className="display-4 fw-bold mb-4 section-title">Professional Excellence</h2>
            <p className="lead text-muted fs-5">
              {resume.summary}
            </p>
          </Col>
        </Row>

        <Row className="g-5 align-items-center">
          <Col lg={6}>
            <div className="about-content">
              <h3 className="h2 fw-bold mb-4">
                <span className="text-primary">5+</span> Years of Innovation
              </h3>
              <p className="lead mb-4">
                With over 5 years of hands-on experience in telecommunications engineering, 
                I've built a reputation for delivering reliable network solutions and managing 
                critical infrastructure projects across Nigeria.
              </p>
              
              <div className="stats-grid mb-4">
                <Row className="g-3">
                  <Col xs={6} sm={6} md={3}>
                    <div className="stat-card modern-card p-3 p-md-4 text-center">
                      <div className="display-4 fw-bold text-primary mb-2">5+</div>
                      <div className="text-muted small">Years Experience</div>
                    </div>
                  </Col>
                  <Col xs={6} sm={6} md={3}>
                    <div className="stat-card modern-card p-3 p-md-4 text-center">
                      <div className="display-4 fw-bold text-success mb-2">200M+</div>
                      <div className="text-muted small">Infrastructure Value</div>
                    </div>
                  </Col>
                  <Col xs={6} sm={6} md={3}>
                    <div className="stat-card modern-card p-3 p-md-4 text-center">
                      <div className="display-4 fw-bold text-warning mb-2">300+</div>
                      <div className="text-muted small">Installations</div>
                    </div>
                  </Col>
                  <Col xs={6} sm={6} md={3}>
                    <div className="stat-card modern-card p-3 p-md-4 text-center">
                      <div className="display-4 fw-bold text-info mb-2">0</div>
                      <div className="text-muted small">Incidents</div>
                    </div>
                  </Col>
                </Row>
              </div>

              <div className="expertise-levels">
                <h4 className="h5 fw-bold mb-3 text-primary">
                  <span className="me-2">📊</span>
                  Expertise Levels
                </h4>
                {skillLevels.map((item, index) => (
                  <div key={index} className="mb-3">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <span className="fw-semibold small">{item.skill}</span>
                      <span className="text-primary small fw-bold">{item.level}%</span>
                    </div>
                    <div className="skill-progress">
                      <div 
                        className="skill-progress-bar" 
                        style={{width: `${item.level}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="skills-section">
              <h3 className="h2 fw-bold mb-4">
                <span className="me-2">🎯</span>
                Core Competencies
              </h3>
              
              <div className="skills-cloud">
                {resume.skills.map((skill, index) => (
                  <Badge 
                    key={index}
                    className="skill-badge me-2 mb-3 px-3 py-2"
                    style={{
                      fontSize: Math.random() > 0.5 ? '0.9rem' : '0.8rem',
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              <Card className="modern-card mt-4 border-0">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="contact-icon me-3" style={{width: '50px', height: '50px'}}>
                      🎓
                    </div>
                    <div>
                      <h5 className="fw-bold mb-1">Education</h5>
                      <p className="text-muted mb-0 small">Academic Foundation</p>
                    </div>
                  </div>
                  <div className="education-item">
                    <h6 className="fw-semibold text-primary mb-1">
                      B.SC Electrical and Electronic Technology
                    </h6>
                    <p className="text-muted small mb-1">
                      Enugu State University of Science and Technology (ESUT)
                    </p>
                    <p className="text-muted small mb-0">2014 – 2018</p>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;