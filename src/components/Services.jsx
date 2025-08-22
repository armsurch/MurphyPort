import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const Services = () => {
  const services = [
    {
      icon: "📡",
      title: "Network Infrastructure Management",
      description: "Complete management of telecom infrastructure including base stations, microwave installations, and network optimization with 24/7 monitoring.",
      features: ["Base Station Management", "Microwave Installation", "Network Optimization", "24/7 Monitoring"],
      price: "From $2,500/month",
      popular: false
    },
    {
      icon: "🔧",
      title: "Technical Support & Maintenance",
      description: "Comprehensive technical support services for telecommunications equipment and systems with rapid emergency response times.",
      features: ["Emergency Response", "Preventive Maintenance", "Equipment Repair", "System Upgrades"],
      price: "From $1,800/month",
      popular: true
    },
    {
      icon: "⚡",
      title: "Electrical & Power Solutions",
      description: "Specialized electrical services including power distribution, solar installations, and backup power systems for critical infrastructure.",
      features: ["Power Distribution", "Solar Installation", "AC Systems", "Backup Solutions"],
      price: "From $3,200/project",
      popular: false
    },
    {
      icon: "🏗️",
      title: "Site Construction & Rigging",
      description: "Professional site construction, rigging services, and infrastructure development for telecommunications projects.",
      features: ["Site Construction", "Tower Rigging", "CCTV Installation", "Earthing Systems"],
      price: "From $5,000/project",
      popular: false
    },
    {
      icon: "💼",
      title: "Project Management",
      description: "End-to-end project management for telecommunications infrastructure with proven track record of on-time delivery.",
      features: ["Project Planning", "Team Leadership", "Quality Assurance", "Timeline Management"],
      price: "From $2,000/month",
      popular: false
    },
    {
      icon: "🎓",
      title: "Training & Consultation",
      description: "Technical training programs and consultation services for telecommunications teams and organizations.",
      features: ["Technical Training", "Best Practices", "Safety Protocols", "Knowledge Transfer"],
      price: "From $800/session",
      popular: false
    }
  ];

  return (
    <section id="services" className="py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <div className="mb-3">
              <span className="badge bg-primary bg-opacity-20 text-primary px-4 py-2 rounded-pill">
                <span className="me-2">⚙️</span>
                Services
              </span>
            </div>
            <h2 className="display-4 fw-bold mb-4 section-title">Professional Services</h2>
            <p className="lead text-muted">
              Comprehensive telecommunications solutions tailored to your specific needs and requirements
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col lg={4} md={6} sm={6} xs={12} key={index}>
              <Card className={`modern-card h-100 border-0 position-relative ${service.popular ? 'border-primary' : ''}`}>
                {service.popular && (
                  <div className="position-absolute top-0 end-0 m-3">
                    <Badge bg="primary" className="px-3 py-2">
                      <span className="me-1">⭐</span>
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <Card.Body className="p-4 text-center">
                  <div className="service-icon mb-3">
                    <div className="contact-icon mx-auto mb-3" style={{width: '80px', height: '80px', fontSize: '2rem'}}>
                      {service.icon}
                    </div>
                  </div>
                  
                  <Card.Title className="h4 fw-bold mb-3 text-primary">
                    {service.title}
                  </Card.Title>
                  
                  <Card.Text className="text-muted mb-4">
                    {service.description}
                  </Card.Text>
                  
                  <div className="service-features mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="d-flex align-items-center justify-content-start mb-2">
                        <span className="me-2 text-success">✅</span>
                        <span className="small text-start">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pricing mb-4">
                    <div className="h5 fw-bold text-primary">{service.price}</div>
                    <div className="small text-muted">Starting price</div>
                  </div>
                  
                  <Button 
                    variant={service.popular ? "primary" : "outline-primary"}
                    className="btn-modern w-100"
                    href="#contact"
                  >
                    <span className="me-2">💬</span>
                    Get Quote
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Service Process */}
        <Row className="mt-5">
          <Col lg={12}>
            <Card className="modern-card border-0">
              <Card.Body className="p-5">
                <div className="text-center mb-5">
                  <h3 className="h2 fw-bold mb-3">
                    <span className="me-2">🔄</span>
                    How I Work
                  </h3>
                  <p className="lead text-muted">
                    My proven 4-step process ensures successful project delivery every time
                  </p>
                </div>
                
                <Row className="g-4">
                  <Col md={3} xs={6} className="text-center">
                    <div className="process-step">
                      <div className="contact-icon mx-auto mb-3" style={{width: '60px', height: '60px'}}>
                        1️⃣
                      </div>
                      <h5 className="fw-bold mb-2">Consultation</h5>
                      <p className="small text-muted">Understanding your requirements and challenges</p>
                    </div>
                  </Col>
                  <Col md={3} xs={6} className="text-center">
                    <div className="process-step">
                      <div className="contact-icon mx-auto mb-3" style={{width: '60px', height: '60px'}}>
                        2️⃣
                      </div>
                      <h5 className="fw-bold mb-2">Planning</h5>
                      <p className="small text-muted">Detailed project planning and resource allocation</p>
                    </div>
                  </Col>
                  <Col md={3} xs={6} className="text-center">
                    <div className="process-step">
                      <div className="contact-icon mx-auto mb-3" style={{width: '60px', height: '60px'}}>
                        3️⃣
                      </div>
                      <h5 className="fw-bold mb-2">Implementation</h5>
                      <p className="small text-muted">Professional execution with quality assurance</p>
                    </div>
                  </Col>
                  <Col md={3} xs={6} className="text-center">
                    <div className="process-step">
                      <div className="contact-icon mx-auto mb-3" style={{width: '60px', height: '60px'}}>
                        4️⃣
                      </div>
                      <h5 className="fw-bold mb-2">Support</h5>
                      <p className="small text-muted">Ongoing maintenance and technical support</p>
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

export default Services;