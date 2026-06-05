import React, { useState } from 'react';
import { Linkedin, Github, Send, AlertCircle, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" className="section flex-center" style={{ minHeight: '90vh' }}>
      <div className="container" style={{ maxWidth: '900px', width: '100%' }}>
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} className="animate-fade-in">
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Let's discuss systems engineering, cloud architecture, or tech consulting.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '3rem',
          alignItems: 'stretch'
        }} className="contact-grid">

          {/* Form Card */}
          <div className="glass-card animate-fade-in delay-1" style={{ padding: '2.5rem' }}>
            {submitted ? (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                height: '100%',
                padding: '2rem'
              }}>
                <CheckCircle size={56} style={{ color: 'var(--accent-cyan)', marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.8rem' }}>
                  Message Sent Successfully!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                  Thank you for reaching out. Josemon will review your request and get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-outline"
                  style={{ fontSize: '0.85rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Name */}
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder=" "
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    style={{ borderColor: errors.name ? 'var(--accent-pink)' : '' }}
                  />
                  <label htmlFor="name" className="form-label" style={{ color: errors.name ? 'var(--accent-pink)' : '' }}>
                    Full Name
                  </label>
                  {errors.name && (
                    <span style={{ color: 'var(--accent-pink)', fontSize: '0.75rem', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <AlertCircle size={10} /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder=" "
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    style={{ borderColor: errors.email ? 'var(--accent-pink)' : '' }}
                  />
                  <label htmlFor="email" className="form-label" style={{ color: errors.email ? 'var(--accent-pink)' : '' }}>
                    Email Address
                  </label>
                  {errors.email && (
                    <span style={{ color: 'var(--accent-pink)', fontSize: '0.75rem', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <AlertCircle size={10} /> {errors.email}
                    </span>
                  )}
                </div>

                {/* Subject */}
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder=" "
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                  />
                  <label htmlFor="subject" className="form-label">
                    Subject (Optional)
                  </label>
                </div>

                {/* Message */}
                <div className="form-group" style={{ marginBottom: '2rem' }}>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    placeholder=" "
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input"
                    style={{
                      resize: 'none',
                      fontFamily: 'var(--font-sans)',
                      borderColor: errors.message ? 'var(--accent-pink)' : ''
                    }}
                  />
                  <label htmlFor="message" className="form-label" style={{ color: errors.message ? 'var(--accent-pink)' : '' }}>
                    Your Message
                  </label>
                  {errors.message && (
                    <span style={{ color: 'var(--accent-pink)', fontSize: '0.75rem', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <AlertCircle size={10} /> {errors.message}
                    </span>
                  )}
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Submit Inquiry <Send size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Socials / Details Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} className="animate-fade-in delay-2">
            <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem', flex: 1 }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', fontFamily: 'var(--font-display)', margin: 0 }}>
                Direct Channels
              </h3>
              
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>
                  Email
                </p>
                <a
                  href="mailto:josemon.placid@gmail.com"
                  style={{ color: 'var(--accent-cyan)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600 }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'var(--accent-cyan)'}
                >
                  josemon.placid@gmail.com
                </a>
              </div>

              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>
                  Consultation Status
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>
                  Welcoming invitations for technical advisory roles and systems engineering projects.
                </p>
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem', marginTop: 'auto' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
                  Professional Networks
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <a
                    href="https://www.linkedin.com/in/josemon-placid-b08486124/"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      transition: 'color 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-cyan)'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    <Linkedin size={18} /> LinkedIn Profile
                  </a>

                  <a
                    href="https://github.com/Joserockz"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      transition: 'color 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-cyan)'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    <Github size={18} /> GitHub Codebase
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
