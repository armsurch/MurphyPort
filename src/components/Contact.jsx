import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert, Modal } from 'react-bootstrap';

const Contact = ({ resume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setShowAlert(true);
      setShowModal(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '', budget: '', timeline: '' });
      setTimeout(() => setShowAlert(false), 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: resume.email,
      link: `mailto:${resume.email}`,
      color: "primary",
      description: "Best for detailed inquiries"
    },
    {
      icon: "📱",
      title: "Phone",
      value: resume.phone,
      link: `tel:${resume.phone}`,
      color: "success",
      description: "Quick consultations"
    },
    {
      icon: "📍",
      title: "Location",
      value: resume.location,
      link: "#",
      color: "warning",
      description: "Available for on-site visits"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "Connect with me",
      link: "#",
      color: "info",
      description: "Professional networking"
    }
  ];

  return (
    <section id="contact" className="py-5 bg-dark text-white position-relative">
      <div className="hero-bg opacity-25"></div>
      <div className="hero-overlay"></div>
      
      <Container className="position-relative">
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <div className="mb-3">
              <span className="badge bg-primary bg-opacity-20 text-primary px-4 py-2 rounded-pill">
                <span className="me-2">📞</span>
                Contact
              </span>
            </div>
            <h2 className="display-4 fw-bold mb-4 text-white">Let's Build Something Amazing</h2>
            <p className="lead text-white-50">
              Ready to discuss your next telecommunications project? I'm here to help bring your vision to life.
            </p>
          </Col>
        </Row>

        <Row className="g-5">
          <Col lg={6}>
            <div className="contact-info">
              <h3 className="h2 fw-bold mb-4 text-white">
                <span className="me-2">🚀</span>
                Let's Connect
              </h3>
              <p className="lead text-white-75 mb-5">
                I'm always excited to take on new challenges and collaborate on innovative projects. 
                Whether you need technical expertise, project leadership, or consultation, let's discuss how we can work together.
              </p>

              <div className="contact-methods mb-5">
                {contactMethods.map((method, index) => (
                  <div key={index} className="contact-item d-flex align-items-center mb-4">
                    <div className={`contact-icon me-4 bg-${method.color}`}>
                      {method.icon}
                    </div>
                    <div className="contact-details flex-grow-1">
                      <h5 className="fw-semibold text-white mb-1">{method.title}</h5>
                      <a 
                        href={method.link} 
                        className={`text-${method.color} text-decoration-none fw-semibold`}
                      >
                        {method.value}
                      </a>
                      <p className="text-white-50 small mb-0">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Card className="glass-card border-0 text-white">
                <Card.Body className="p-4">
                  <h5 className="fw-bold mb-3">
                    <span className="me-2">⏰</span>
                    Availability
                  </h5>
                  <div className="availability-info">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span>Response Time:</span>
                      <span className="text-success fw-semibold">Within 24 hours</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span>Project Start:</span>
                      <span className="text-warning fw-semibold">2-3 weeks</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <span>Consultation:</span>
                      <span className="text-info fw-semibold">Free initial call</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col lg={6}>
            <Card className="modern-card border-0">
              <Card.Body className="p-4">
                <h4 className="fw-bold mb-4 text-dark">
                  <span className="me-2">💬</span>
                  Send a Message
                </h4>
                
                {showAlert && (
                  <Alert variant="success" className="mb-4">
                    <div className="d-flex align-items-center">
                      <span className="me-2">🎉</span>
                      <div>
                        <strong>Message sent successfully!</strong>
                        <div className="small">I'll get back to you within 24 hours.</div>
                      </div>
                    </div>
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row className="g-3">
                    <Col md={6} sm={6} xs={12}>
                      <Form.Group>
                        <Form.Label className="fw-semibold">
                          <span className="me-2">👤</span>
                          Full Name *
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="form-control-modern"
                          placeholder="John Doe"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                      <Form.Group>
                        <Form.Label className="fw-semibold">
                          <span className="me-2">📧</span>
                          Email Address *
                        </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="form-control-modern"
                          placeholder="john@company.com"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                      <Form.Group>
                        <Form.Label className="fw-semibold">
                          <span className="me-2">💰</span>
                          Project Budget
                        </Form.Label>
                        <Form.Select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="form-control-modern"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-5k">Under $5,000</option>
                          <option value="5k-15k">$5,000 - $15,000</option>
                          <option value="15k-50k">$15,000 - $50,000</option>
                          <option value="over-50k">Over $50,000</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                      <Form.Group>
                        <Form.Label className="fw-semibold">
                          <span className="me-2">📅</span>
                          Timeline
                        </Form.Label>
                        <Form.Select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="form-control-modern"
                        >
                          <option value="">Select timeline</option>
                          <option value="asap">ASAP</option>
                          <option value="1-month">Within 1 month</option>
                          <option value="3-months">Within 3 months</option>
                          <option value="flexible">Flexible</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label className="fw-semibold">
                          <span className="me-2">📋</span>
                          Subject *
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="form-control-modern"
                          placeholder="Network Infrastructure Project"
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label className="fw-semibold">
                          <span className="me-2">💭</span>
                          Project Details *
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          className="form-control-modern"
                          placeholder="Tell me about your project requirements, challenges, and goals..."
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Button 
                        type="submit" 
                        variant="primary" 
                        size="lg" 
                        className="btn-modern w-100"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <span className="me-2">🚀</span>
                            Send Message
                          </>
                        )}
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Success Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body className="text-center p-5">
          <div className="mb-4">
            <div className="contact-icon mx-auto bg-success" style={{width: '80px', height: '80px', fontSize: '2rem'}}>
              ✅
            </div>
          </div>
          <h4 className="fw-bold mb-3">Message Sent Successfully!</h4>
          <p className="text-muted mb-4">
            Thank you for reaching out! I've received your message and will get back to you within 24 hours.
          </p>
          <Button variant="primary" onClick={() => setShowModal(false)} className="btn-modern">
            Great, thanks!
          </Button>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Contact;