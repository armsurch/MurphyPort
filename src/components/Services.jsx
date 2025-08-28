import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, Modal, Form } from 'react-bootstrap';

// Format numeric values in Nigerian Naira (no decimals)
const formatNGN = (value) =>
  new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(value);

const Services = () => {
  // AI-curated service copy tailored to telecom work in Nigeria
  const services = [
    {
      icon: '📡',
      title: 'Managed Network Infrastructure',
      description:
        'End-to-end management of base stations, microwave links, and core network devices with proactive monitoring and SLAs built for uptime.',
      features: [
        '24/7 NOC Monitoring',
        'Microwave & BTS Optimization',
        'Incident & Change Management',
        'Uptime & Performance Reporting',
      ],
      price: { amount: 2500000, unit: 'month' },
      addons: [
        { name: 'On-site Engineer (per month)', price: 350000 },
        { name: 'Extended SLA (99.9%)', price: 250000 },
      ],
      popular: false,
    },
    {
      icon: '🌐',
      title: 'Enterprise Internet Delivery',
      description:
        'High-availability internet distribution for courts, ministries, and enterprises with last-mile design, QoS, and redundancy.',
      features: [
        'Last-Mile Design & Deployment',
        'Bandwidth Management (QoS)',
        'Redundant Links & Failover',
        'SLA-backed Support',
      ],
      price: { amount: 1800000, unit: 'month' },
      addons: [
        { name: 'Secondary Link (Failover)', price: 400000 },
        { name: 'Advanced QoS Package', price: 150000 },
      ],
      popular: true,
    },
    {
      icon: '⚡',
      title: 'Power & Solar for Telecom Sites',
      description:
        'Reliable power systems for mission-critical sites, including solar, AC backup, and clean distribution with safety compliance.',
      features: [
        'Solar & Inverter Sizing',
        'Battery Banks & Backup',
        'AC/DC Distribution Panels',
        'Surge & Earthing Protection',
      ],
      price: { amount: 3200000, unit: 'project' },
      addons: [
        { name: 'Additional Battery Bank', price: 600000 },
        { name: 'Remote Monitoring System', price: 250000 },
      ],
      popular: false,
    },
    {
      icon: '🏗️',
      title: 'Site Build, Rigging & HSE',
      description:
        'Turnkey site construction with tower rigging, alignment, and HSE compliance for safe, efficient deployments.',
      features: [
        'Tower Rigging & Alignment',
        'CCTV & Access Control',
        'Cable Management & Trays',
        'HSE Compliance & Audits',
      ],
      price: { amount: 5000000, unit: 'project' },
      addons: [
        { name: 'Night Work Provision', price: 300000 },
        { name: 'Dedicated HSE Officer On-site', price: 200000 },
      ],
      popular: false,
    },
    {
      icon: '🧭',
      title: 'Project Management (PMO)',
      description:
        'Delivery-focused PMO services with scope, timeline, and quality gates ensuring projects land on time and within budget.',
      features: [
        'Scope & WBS Planning',
        'Resource & Vendor Management',
        'Quality Assurance Gates',
        'Risk & Issue Tracking',
      ],
      price: { amount: 2000000, unit: 'month' },
      addons: [
        { name: 'Weekly Stakeholder Workshops', price: 150000 },
        { name: 'Vendor Audits & Compliance', price: 250000 },
      ],
      popular: false,
    },
    {
      icon: '🎓',
      title: 'Training, Advisory & SLA Support',
      description:
        'Hands-on training for field teams and advisory for IT/Network ops with customizable SLAs for steady operations.',
      features: [
        'Field Team Coaching',
        'Playbooks & Best Practices',
        'Runbooks & Escalation Paths',
        'On-site/Remote Workshops',
      ],
      price: { amount: 800000, unit: 'session' },
      addons: [
        { name: 'Certification Prep Module', price: 200000 },
        { name: 'On-site Training (per day)', price: 120000 },
      ],
      popular: false,
    },
  ];

  // Quote modal state
  const [showQuote, setShowQuote] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState([]);

  const openQuote = (service) => {
    setSelectedService(service);
    setSelectedAddons([]);
    setShowQuote(true);
  };

  const toggleAddon = (addon) => {
    setSelectedAddons((prev) => {
      const exists = prev.find((a) => a.name === addon.name);
      if (exists) return prev.filter((a) => a.name !== addon.name);
      return [...prev, addon];
    });
  };

  const quoteBase = selectedService?.price.amount || 0;
  const quoteAddonsTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);
  const quoteTotal = quoteBase + quoteAddonsTotal;

  const proceedToContact = () => {
    if (!selectedService) return;
    const payload = {
      serviceTitle: selectedService.title,
      unit: selectedService.price.unit,
      base: selectedService.price.amount,
      addons: selectedAddons,
      total: quoteTotal,
    };
    try {
      localStorage.setItem('selectedService', JSON.stringify(payload));
    } catch (_) {}
    window.location.hash = '#contact';
    setShowQuote(false);
  };

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
              Telecom-focused solutions tailored for Nigerian enterprises and public sector organizations
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
                    <div className="contact-icon mx-auto mb-3" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                      {service.icon}
                    </div>
                  </div>

                  <Card.Title className="h4 fw-bold mb-3 text-primary">{service.title}</Card.Title>

                  <Card.Text className="text-muted mb-4">{service.description}</Card.Text>

                  <div className="service-features mb-4 text-start">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="d-flex align-items-center mb-2">
                        <span className="me-2 text-success">✅</span>
                        <span className="small">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pricing mb-4">
                    <div className="h5 fw-bold text-primary">
                      From {formatNGN(service.price.amount)}/{service.price.unit}
                    </div>
                    <div className="small text-muted">Starting price</div>
                  </div>

                  <Button
                    variant={service.popular ? 'primary' : 'outline-primary'}
                    className="btn-modern w-100"
                    onClick={() => openQuote(service)}
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
                      <div className="contact-icon mx-auto mb-3" style={{ width: '60px', height: '60px' }}>
                        1️⃣
                      </div>
                      <h5 className="fw-bold mb-2">Consultation</h5>
                      <p className="small text-muted">Understanding your requirements and challenges</p>
                    </div>
                  </Col>
                  <Col md={3} xs={6} className="text-center">
                    <div className="process-step">
                      <div className="contact-icon mx-auto mb-3" style={{ width: '60px', height: '60px' }}>
                        2️⃣
                      </div>
                      <h5 className="fw-bold mb-2">Planning</h5>
                      <p className="small text-muted">Detailed project planning and resource allocation</p>
                    </div>
                  </Col>
                  <Col md={3} xs={6} className="text-center">
                    <div className="process-step">
                      <div className="contact-icon mx-auto mb-3" style={{ width: '60px', height: '60px' }}>
                        3️⃣
                      </div>
                      <h5 className="fw-bold mb-2">Implementation</h5>
                      <p className="small text-muted">Professional execution with quality assurance</p>
                    </div>
                  </Col>
                  <Col md={3} xs={6} className="text-center">
                    <div className="process-step">
                      <div className="contact-icon mx-auto mb-3" style={{ width: '60px', height: '60px' }}>
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

      {/* Quote Modal */}
      <Modal show={showQuote} onHide={() => setShowQuote(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Quick Quote — {selectedService?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedService && (
            <>
              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <span className="fw-semibold">Base</span>
                  <span>{formatNGN(selectedService.price.amount)}/{selectedService.price.unit}</span>
                </div>
                <div className="small text-muted">Includes:</div>
                <ul className="small text-muted mb-3">
                  {selectedService.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>

              {selectedService.addons?.length > 0 && (
                <div className="mb-3">
                  <div className="fw-semibold mb-2">Optional add-ons</div>
                  {selectedService.addons.map((addon, idx) => (
                    <Form.Check
                      key={idx}
                      type="checkbox"
                      id={`addon-${idx}`}
                      label={`${addon.name} (+${formatNGN(addon.price)})`}
                      checked={!!selectedAddons.find((a) => a.name === addon.name)}
                      onChange={() => toggleAddon(addon)}
                      className="mb-2"
                    />
                  ))}
                </div>
              )}

              <div className="d-flex justify-content-between border-top pt-3">
                <span className="fw-bold">Estimated total</span>
                <span className="fw-bold">{formatNGN(quoteTotal)}/{selectedService.price.unit}</span>
              </div>
              <div className="small text-muted mt-2">Final quote depends on site survey and scope confirmation.</div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => setShowQuote(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={proceedToContact}>
            Proceed to Contact
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Services;
