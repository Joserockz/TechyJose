import React, { useState, useEffect } from 'react';
import { Calendar, Briefcase, Award, ExternalLink, X, ShieldAlert, Cpu } from 'lucide-react';

const Timeline = () => {
  const [activeCert, setActiveCert] = useState(null);

  const experiences = [
    {
      role: "Technical Support Executive",
      company: "ZAK Solutions",
      period: "2024 - Present",
      description: "Delivering enterprise-grade systems administration and client technical support. Responsible for server infrastructure health, virtualization services, and network access validation.",
      details: [
        "Manage and resolve L1/L2 incidents using ServiceNow under strict SLA standards.",
        "Administer user accounts and security groups in Active Directory and Entra ID.",
        "Deploy and configure virtual machines using Hyper-V virtualization.",
        "Provision network rules and client-side secure VPN connections using FortiClient.",
        "Automate workstation builds and OS installations utilizing Acronis systems imaging."
      ]
    },
    {
      role: "MT5 System Admin",
      company: "Market Equity",
      period: "March 2022 - Jan 2024",
      description: "Managed internal systems infrastructure and multi-tier server availability, optimizing client platforms and backend transaction systems.",
      details: [
        "Installed and configured server infrastructure, switches, firewalls, and data backup agents.",
        "Monitored server health and system performance via Resource Monitor and Event Viewer.",
        "Diagnosed complex network connectivity and package drops using Wireshark and traceroute.",
        "Administered SaaS subscriptions, Office 365 licensing, and user mailboxes.",
        "Supported API integration projects, overseeing documentation, testing, and version control."
      ]
    },
    {
      role: "IT Support",
      company: "Holy Cross Hospital (Mysore, India)",
      period: "Feb 2019 - Jan 2022",
      description: "Supported critical healthcare infrastructure and end-user hardware, ensuring continuous operations and patient-care system availability.",
      details: [
        "Configured and maintained hospital hardware including desktops, laptops, tablets, and medical printers.",
        "Supported Electronic Health Record (EHR) systems, ensuring data entry compliance and security.",
        "Administered Point of Sale (POS) terminals, thermal receipt printers, and scan equipment.",
        "Maintained digital attendance logs, security CCTV cameras, and local backup arrays."
      ]
    }
  ];

  const credentials = [
    {
      title: "IT Superhero Badge",
      issuer: "Cisco Spaces",
      date: "2025",
      image: "./cisco_superhero.png",
      glow: "rgba(0, 240, 255, 0.3)",
      featured: true,
      description: "Awarded for driving digital transformation, cloud modernization, and secure network infrastructure integration."
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "2025",
      image: "./cisco_cybersecurity.png",
      glow: "rgba(46, 204, 113, 0.3)",
      description: "Covers foundational cybersecurity paths, threat intelligence, secure network design, and risk mitigation."
    },
    {
      title: "Penetration Testing Process",
      issuer: "Hack The Box Academy",
      date: "2025",
      link: "https://academy.hackthebox.com/achievement/1651101/90",
      icon: <ShieldAlert size={28} style={{ color: 'var(--accent-pink)' }} />,
      glow: "rgba(255, 0, 127, 0.3)",
      description: "Advanced training module covering client pre-engagements, contract scoping, active testing phases, and threat modeling."
    },
    {
      title: "GenAI for Everyone",
      issuer: "Coursera / Fractal Analytics",
      date: "2024",
      image: "./coursera_genai.png",
      glow: "rgba(138, 43, 226, 0.3)",
      description: "Mastering practical Generative AI applications, prompting engineering, and corporate AI strategy."
    },
    {
      title: "Network Security Certificate",
      issuer: "Great Learning Academy",
      date: "2024",
      image: "./greatlearning_networksecurity.png",
      glow: "rgba(0, 120, 212, 0.3)",
      description: "Focuses on cryptography standards, firewalls configuration, intrusion prevention, and access policies."
    }
  ];

  // Close certification modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setActiveCert(null);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <section id="timeline" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }} className="animate-fade-in">
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            My career timeline as an IT systems expert and support specialist.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              
              <div className="timeline-content">
                <div 
                  className="glass-card" 
                  style={{ 
                    padding: '2.5rem',
                    animationDelay: `${0.15 * index}s`
                  }}
                >
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start',
                    marginBottom: '1.2rem',
                    flexWrap: 'wrap',
                    gap: '0.8rem'
                  }}>
                    <div>
                      <h4 style={{ fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                        {exp.role}
                      </h4>
                      <p style={{ color: 'var(--accent-cyan)', fontSize: '0.95rem', fontWeight: 700 }}>
                        {exp.company}
                      </p>
                    </div>
                    
                    <span style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '6px', 
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '30px',
                      fontSize: '0.8rem',
                      color: 'var(--text-secondary)'
                    }}>
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                  </div>

                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {exp.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {exp.details.map((detail, idx) => (
                      <span 
                        key={idx} 
                        style={{ 
                          fontSize: '0.85rem', 
                          color: 'var(--text-muted)',
                          lineHeight: '1.5',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '6px'
                        }}
                      >
                        <span style={{ color: 'var(--accent-cyan)', marginTop: '2px' }}>•</span>
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications and Badges Section */}
        <div style={{ marginTop: '8rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '2.2rem', marginBottom: '0.8rem', fontFamily: 'var(--font-display)' }}>
              Accolades & <span className="text-gradient">Certifications</span>
            </h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Click on a card to view the official verification certificate or credential badge.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {credentials.map((cert, index) => (
              <div
                key={index}
                onClick={() => {
                  if (cert.link) {
                    window.open(cert.link, '_blank');
                  } else {
                    setActiveCert(cert);
                  }
                }}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '20px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.2rem',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  gridColumn: cert.featured ? '1 / -1' : 'auto' // Make featured badge full width or prominent
                }}
                className="cert-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = cert.glow.replace('0.3', '0.6');
                  e.currentTarget.style.boxShadow = `0 12px 30px ${cert.glow}`;
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Badge Logo / Icon */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {cert.image ? (
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      style={{ 
                        height: cert.featured ? '70px' : '50px',
                        width: 'auto',
                        borderRadius: '8px',
                        objectFit: 'contain'
                      }} 
                    />
                  ) : (
                    <div style={{
                      background: 'rgba(255, 0, 127, 0.08)',
                      padding: '0.6rem',
                      borderRadius: '12px',
                      display: 'flex'
                    }}>
                      {cert.icon}
                    </div>
                  )}

                  <span style={{ 
                    fontSize: '0.8rem', 
                    color: 'var(--text-muted)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '30px',
                    fontWeight: 600
                  }}>
                    {cert.date}
                  </span>
                </div>

                <div>
                  <h4 style={{ 
                    fontSize: cert.featured ? '1.4rem' : '1.1rem', 
                    color: 'var(--text-primary)', 
                    marginBottom: '0.4rem',
                    fontFamily: 'var(--font-display)'
                  }}>
                    {cert.title}
                    {cert.featured && (
                      <span style={{ 
                        fontSize: '0.75rem', 
                        color: 'var(--accent-cyan)', 
                        background: 'rgba(0, 240, 255, 0.1)', 
                        border: '1px solid rgba(0, 240, 255, 0.2)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '30px',
                        marginLeft: '10px',
                        verticalAlign: 'middle'
                      }}>
                        Featured Badge
                      </span>
                    )}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '0.6rem' }}>
                    {cert.issuer}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
                    {cert.description}
                  </p>
                </div>

                <div style={{ 
                  marginTop: 'auto', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '6px', 
                  fontSize: '0.8rem', 
                  color: 'var(--text-muted)',
                  fontWeight: 600
                }}>
                  {cert.link ? (
                    <>Verify Link <ExternalLink size={12} /></>
                  ) : (
                    <>Click to expand badge</>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Certificate Viewer Modal */}
      {activeCert && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(5, 5, 10, 0.85)',
            backdropFilter: 'blur(8px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
          }}
          onClick={() => setActiveCert(null)}
        >
          <div 
            style={{
              background: '#0d0d1a',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              padding: '2.5rem',
              maxWidth: '650px',
              width: '100%',
              position: 'relative',
              textAlign: 'center',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.6)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveCert(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'transparent',
                border: 'none',
                color: 'var(--text-secondary)',
                cursor: 'pointer'
              }}
            >
              <X size={24} />
            </button>

            <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '0.4rem', fontFamily: 'var(--font-display)' }}>
              {activeCert.title}
            </h3>
            <p style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1.5rem' }}>
              {activeCert.issuer} • {activeCert.date}
            </p>

            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '16px',
              padding: '1rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid rgba(255, 255, 255, 0.03)',
              marginBottom: '1.5rem'
            }}>
              <img 
                src={activeCert.image} 
                alt={activeCert.title} 
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '400px', 
                  borderRadius: '10px',
                  objectFit: 'contain',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                }} 
              />
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
              {activeCert.description}
            </p>
          </div>
        </div>
      )}

      {/* Media query styling overrides for grid layouts */}
      <style>{`
        @media (max-width: 768px) {
          .cert-card {
            grid-column: auto !important; /* Reset featured badge span on mobile */
          }
        }
      `}</style>
    </section>
  );
};

export default Timeline;
