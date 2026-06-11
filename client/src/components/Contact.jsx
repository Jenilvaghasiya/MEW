import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert('Please fill in all required fields.');
      return;
    }
    // Simulate API Submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <section className="section-padding contact-section" id="contact">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="about-subtitle">GET IN TOUCH</span>
          <h2 className="section-title center">Contact Our Engineering Desk</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
            Have a custom compound requirement or design blueprint to discuss? Reach out to our technical team today.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Side: Contact Form */}
          <div className="contact-card contact-form-card">
            {isSubmitted ? (
              <div className="contact-success-state">
                <CheckCircle className="success-icon" size={48} />
                <h3>Message Received!</h3>
                <p>Thank you, <strong>{formState.name}</strong>. Our engineering desk will review your details and contact you via <strong>{formState.email}</strong> shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="contact-form-title">Send Us a Message</h3>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Full Name *</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formState.name}
                    onChange={handleInput}
                    className="form-input"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">Corporate Email *</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formState.email}
                      onChange={handleInput}
                      className="form-input"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-phone">Phone Number</label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleInput}
                      className="form-input"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Requirements / Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formState.message}
                    onChange={handleInput}
                    className="form-input"
                    rows="4"
                    placeholder="Describe compound specifications, tolerances, fluid media details, or application environment..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-submit">
                  <span>Send Inquiry</span>
                  <Send size={16} style={{ marginLeft: '8px' }} />
                </button>
              </form>
            )}
          </div>

          {/* Right Side: Company Info & Map */}
          <div className="contact-info-column">
            <div className="contact-card contact-info-card">
              <h3 className="contact-info-title">Corporate Headquarters</h3>
              
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="info-icon-wrapper">
                    <MapPin size={20} />
                  </div>
                  <div className="info-text-wrapper">
                    <h4>Factory Address</h4>
                    <p>Plot No. 13, Shree Umiya Ind. Zone-2, Opp. Umiya Steel, N.H./27, At. Ribda, Ta. Gondal, Dist. Rajkot - 360311, Gujarat - INDIA</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="info-icon-wrapper">
                    <Phone size={20} />
                  </div>
                  <div className="info-text-wrapper">
                    <h4>Direct Contact & Engineering Desk</h4>
                    <p><strong>Hitesh Depani:</strong><br />+91 94267 32792<br />+91 90549 73285</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="info-icon-wrapper">
                    <Mail size={20} />
                  </div>
                  <div className="info-text-wrapper">
                    <h4>Inquiries & RFQs</h4>
                    <p>marutiengineeringworks7@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="contact-map-wrapper">
              <iframe
                title="MEW Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.827720235948!2d70.7675549!3d22.1325791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395837a7bfffffff%3A0xe54ef929c2184a!2sUmiya%20Industrial%20Zone%20-%202!5e0!3m2!1sen!2sin!4v1718100000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
